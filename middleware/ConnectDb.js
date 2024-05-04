import mongoose from 'mongoose';

async function connectDb() {
    try {
        await mongoose.connect(`${process.env.NEXT_PUBLIC_MondoDB_URI}`);
    }
    catch (error) {
        console.log(error.message)
    }
}

export default connectDb