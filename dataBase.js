const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://ciontebianca:Test123@cluster0.vvusb7m.mongodb.net/MoveClassDataBase?retryWrites=true&w=majority&appName=Cluster0',
            );

        console.log('MongoDB Connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
module.exports = connectDB;