import jwt from 'jsonwebtoken';
import config from '../config/env.js';
	
// Generate JWT token
export const generateToken = (userId) => {
  console.log("jwt++++++++++++", config.jwtSecret)
  return jwt.sign(
    { id: userId },
    "scott",
    { expiresIn: config.jwtExpiration }
  );
};

// Verify JWT token
export const verifyToken = (token) => {
  console.log("jwt", config.jwtSecret )
  try {
    const decoded = jwt.verify(token, "scott");
    return { valid: true, expired: false, decoded };
  } catch (error) {
    console.log("error", error)
			return {
      valid: false,
      expired: error.name === 'TokenExpiredError',
      decoded: null
    };
  }
};