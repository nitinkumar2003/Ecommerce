import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import Joi from 'joi';
import { generateToken } from '../utils/jwtUtils.js';
import { sendEmail } from '../utils/sendEmail.js';

const router = express.Router();

// 1. User Registration
router.post('/register', async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).send('User already exists.');

  const user = new User({ name, email, password });
  await user.save();

  const token = generateToken(user._id);
  res.status(201).send({ user, token });
});

// 2. User Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user) return res.status(400).send('User not found.');

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).send('Invalid credentials.');

  const token = generateToken(user._id);
  res.send({ user, token });
});

// 3. Update Profile
router.put('/profile', async (req, res) => {
  const { name, avatar, mobile } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { name, avatar, mobile },
    { new: true }
  );
  res.send(user);
});

// 4. Change Password
router.put('/change-password', async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  const user = await User.findById(req.user._id).select('+password');
  if (!user) return res.status(404).send('User not found.');

  const isMatch = await user.comparePassword(currentPassword);
  if (!isMatch) return res.status(400).send('Incorrect current password.');

  user.password = newPassword;
  await user.save();

  res.send('Password updated successfully.');
});

// 5. Forgot Password - Send OTP
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('User not found.');

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  user.forgot_password_otp = otp;
  user.forgot_password_expiry = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes
  await user.save();

  await sendEmail({
    email,
    subject: 'Your Password Reset OTP',
    template: 'forgot-password.ejs',
    data: { otp },
  });

  res.send('OTP sent to your email.');
});

// 6. Reset Password
router.post('/reset-password', async (req, res) => {
  const { email, otp, newPassword } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('User not found.');

  if (user.forgot_password_otp !== otp) return res.status(400).send('Invalid OTP.');
  if (Date.now() > user.forgot_password_expiry) return res.status(400).send('OTP expired.');

  user.password = newPassword;
  user.forgot_password_otp = null; // Clear OTP after successful reset
  user.forgot_password_expiry = null;
  await user.save();

  res.send('Password reset successfully.');
});

// 7. Add to Wishlist
router.post('/wishlist', async (req, res) => {
  const { productId } = req.body;
  const user = await User.findById(req.user._id);
  user.wishlist.push(productId);
  await user.save();
  res.send('Product added to wishlist.');
});

// 8. Get Order History
router.get('/order-history', async (req, res) => {
  const user = await User.findById(req.user._id).populate('order_history');
  res.send(user.order_history);
});

// 9. Delete User Account
router.delete('/delete', async (req, res) => {
  await User.findByIdAndDelete(req.user._id);
  res.send('User account deleted.');
});

export default router;


import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    email: { type: String, required: [true, "Email is required"], unique: true },
    password: { type: String, required: [true, 'Password is required'], select: false },
    avatar: { type: String, default: "" },
    mobile: { type: String, default: null },
    shipping_address: { type: Schema.Types.ObjectId, ref: 'address' },
    billing_address: { type: Schema.Types.ObjectId, ref: 'address' },
    wishlist: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    order_history: [{ type: Schema.Types.ObjectId, ref: 'order' }],
    role: { type: String, enum: ['Admin', 'User'], default: 'User' },
    status: { type: String, enum: ['Active', 'Inactive', 'Suspended'], default: 'Active' },
    refresh_token: { type: String, default: "" },
    verify_email: { type: Boolean, default: false },
    forgot_password_otp: { type: String, default: null },
    forgot_password_expiry: { type: Date, default: null },
  },
  { timestamps: true }
);

// Pre-save middleware to hash password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare password
userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default model("User", userSchema);

