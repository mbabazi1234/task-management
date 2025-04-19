import mongoose from 'mongoose';
import config from './env.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://gizzo:scott123@task.liabi3u.mongodb.net/?retryWrites=true&w=majority&appName=task', {
  
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;

  } 
  catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};


 export default connectDB;
