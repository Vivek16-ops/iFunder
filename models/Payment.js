import mongoose from "mongoose";

const Paymentschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    to_user: {
        type: String,
        required: true
    },
    oid: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
    amount: {
        type: Number,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const PaymentModel = mongoose.models.Payments || mongoose.model("Payments", Paymentschema);

export default PaymentModel;