import ErrorHandler from "../utils/ErrorHandler.util.js";

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);  // Log the error stack for debugging

  // If the error is an instance of ErrorHandler, send the custom error message and status code
  if (err instanceof ErrorHandler) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // For unexpected errors, send a generic internal server error
  return res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later.",
  });
};

export default errorHandler;
