import mongoose, { Schema, ObjectId, model } from 'mongoose';
import bcrypt from 'bcryptjs';

// User Schema definition
const userSchema = new Schema(
  {
    // Basic User Information
    name: {
      type: String,
      required: [true, 'Provide name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Provide email'],
      unique: [true, 'Email already exists'],
      collation: { locale: 'en', strength: 2 },
    },
    password: {
      type: String,
      required: [true, 'Provide password'],
      select: false, // password should not be returned by default in queries
    },
    avatar: {
      type: String,
      default: '',
    },
    mobile: {
      type: String,
      default: null,
    },
    refresh_token: {
      type: String,
      default: '',
    },
    verify_email: {
      type: Boolean,
      default: false,
    },
    last_login_date: {
      type: Date,
      default: null,
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive', 'Suspended'],
      default: 'Active',
    },
    address_detail: [
      {
        type: ObjectId,
        ref: 'address',
      },
    ],
    // Forgot Password & Two-Factor Authentication
    forgot_password_otp: {
      type: String,
      default: null,
    },
    forgot_password_expiry: {
      type: Date,
      default: null,
    },
    two_factor_enabled: {
      type: Boolean,
      default: false,
    },
    two_factor_secret: {
      type: String,
      default: null,
    },
    // Additional Features
    loyalty_points: {
      type: Number,
      default: 0,
    },
    email_notifications: {
      type: Boolean,
      default: true,
    },
    sms_notifications: {
      type: Boolean,
      default: false,
    },
    social_accounts: {
      google: { type: String, default: null },
      facebook: { type: String, default: null },
    },
    // Security and User Lockout
    failed_login_attempts: {
      type: Number,
      default: 0,
    },
    lockout_until: {
      type: Date,
      default: null,
    },
    // User Role
    role: {
      type: String,
      enum: ['Admin', 'User'],
      default: 'User',
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Pre-save hook to hash password before saving to DB
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate an email verification token
// userSchema.methods.generateEmailVerificationToken = function () {
//   const token = crypto.randomBytes(20).toString('hex');
//   this.email_verification_token = token;
//   this.email_verification_expiry = Date.now() + 3600000; // 1 hour expiry
//   return token;
// };

// Method to verify the email
// userSchema.methods.verifyEmail = function (token) {
//   if (
//     this.email_verification_token === token &&
//     this.email_verification_expiry > Date.now()
//   ) {
//     this.verify_email = true;
//     this.email_verification_token = undefined;
//     this.email_verification_expiry = undefined;
//     return true;
//   }
//   return false;
// };

// Generate OTP for forgot password functionality
// userSchema.methods.generatePasswordResetOTP = function () {
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();
//   this.forgot_password_otp = otp;
//   this.forgot_password_expiry = Date.now() + 3600000; // OTP expires in 1 hour
//   return otp;
// };

// Method to verify OTP for password reset
// userSchema.methods.verifyPasswordResetOTP = function (otp) {
//   if (
//     this.forgot_password_otp === otp &&
//     this.forgot_password_expiry > Date.now()
//   ) {
//     return true;
//   }
//   return false;
// };

// Lock account after multiple failed login attempts
// userSchema.methods.incrementFailedLoginAttempts = async function () {
//   this.failed_login_attempts += 1;

//   // Lock the account if failed login attempts exceed 5
//   if (this.failed_login_attempts >= 5) {
//     this.lockout_until = Date.now() + 300000; // 5 minutes lockout
//   }
//   await this.save();
// };

// userSchema.methods.resetFailedLoginAttempts = async function () {
//   this.failed_login_attempts = 0;
//   this.lockout_until = null;
//   await this.save();
// };

// Export User model
export default model('user', userSchema);
