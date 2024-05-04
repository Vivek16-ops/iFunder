"use server"
import connectDb from "@/middleware/ConnectDb";
import PaymentModel from "@/models/Payment";
import UserModel from "@/models/User";
import Razorpay from "razorpay";

// For creating orderID and add info to database 
export const Initiate = async (amount, to_username, paymentForm) => {
  await connectDb();

  var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID,
    key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET,
  });

  var options = {
    amount: Number.parseInt(amount) * 100,
    currency: "INR",
  };

  let x = await instance.orders.create(options)

  // creating the payment object which shows the payments in the database 
  const payment = await PaymentModel.create({
    name: paymentForm.name,
    to_user: to_username,
    oid: x.id,
    message: paymentForm.message,
    amount: Number.parseInt(amount)
  })

  return x
}

//For getting payment info from database
export const getPaymentInfo = async (username) => {
  try {
    await connectDb()
    const payments = await PaymentModel.find({ to_user: username }).sort({ createdAt: -1 })
    return JSON.stringify(payments)
  }
  catch (error) {
    console.log(error.message)
  }
}

// For getting user details from database
export const fetchUser = async (username) => {
  await connectDb()
  const user = await UserModel.findOne({ username: username })
  return JSON.stringify(user)
}

//For updating user 
export const updateProfile = async (data, oldusername) => {
  await connectDb()
  let ndata = Object.fromEntries(data)

  //If the username is beign updated check if username is available
  if (ndata.username !== oldusername) {
    let u = await UserModel.findOne({ username: oldusername })
    if (u) {
      return JSON.stringify({ success: false, message: "Username is already taken" })
    }
  }

  await UserModel.updateOne({ email: ndata.email }, ndata)
}