// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://cerin-susan:cerinsusan@clusternew.aalc9so.mongodb.net/productDB?retryWrites=true&w=majority&appName=ClusterNew', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Database connected successfully');
//   } catch (error) {
//     console.error('Database connection failed:', error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


// const mongoose = require('mongoose');
// require('dotenv').config();  // To access the .env file variables

// // MongoDB connection setup
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error(`Error: ${err.message}`);
//     process.exit(1);  // Exit the process if the connection fails
//   }
// };

// module.exports = connectDB;

const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://cerin-susan:cerinsusan@clusternew.aalc9so.mongodb.net/productDB?retryWrites=true&w=majority&appName=ClusterNew').then(()=>{
    console.log('DB is connected')
}).catch((error)=>{
    console.log('Error in connection')
}) 