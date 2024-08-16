export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const options = {
    expires: new Date(
      Date.now() + 5 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // Set httpOnly to true
    secure:true,
    sameSite:"None",
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
