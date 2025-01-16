  import mongoose from "mongoose";

  const customerSchema = mongoose.Schema({
    customerName: { type: String, required: [true, "name is required."] },
    customerMobile: { type: Number, required: [true, "Mobile No. is required."] },
    customerAddress: { type: String, required: [true, "Address is required."] },
    customerEmail: {
      type: String,
      required: [true, "Email is required."],
    },
    customerPassword: { type: String, required: [true, "Password is required."] },
    customerGender: {
      type: String,
      enum: ["male", "female", "transgender"],
      required: [true, "Gender is required."],
    }
  },
  { timestamps: true });
  export const Customer = mongoose.model("Customer", customerSchema);
