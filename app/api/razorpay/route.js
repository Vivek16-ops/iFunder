import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import PaymentModel from "@/models/Payment";
import connectDb from "@/middleware/ConnectDb";

// This page is rednered only after payment is done by the user
export const POST = async (req) => {
    await connectDb();
    let body = await req.formData();
    body = Object.fromEntries(body);

    //check if razorpayOrderID is present on the server or not 
    let p = await PaymentModel.findOne({ oid: body.razorpay_order_id });
    if (!p) {
        return NextResponse.json({ success: false, message: "OrderID not found" });
    }

    //verify the payment
    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, process.env.NEXT_PUBLIC_RAZORPAY_SECRET);

    if (xx) {
        const updatePayment = await PaymentModel.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: true });
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/${updatePayment.to_user}?paymentdone=true`);
    } else {
        return NextResponse.json({ success: false, message: "Payment Failed" });
    }
}