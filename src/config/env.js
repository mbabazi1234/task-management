import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  mongodbUri: process.env.MONGODB_URL,
  jwtSecret: process.env.JWT_SECRET | "helloworld",
  jwtExpiration: process.env.JWT_EXPIRE || '7d'
};