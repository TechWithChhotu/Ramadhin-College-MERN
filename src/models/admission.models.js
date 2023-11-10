import mongoose, { Schema, model } from "mongoose";

const admissionSchema = new Schema(
  {
    course: {
      type: String,
      required: [true, "Course is required"],
    },
    session: {
      type: String,
      required: [true, "Session is required"],
    },
    semester: {
      type: String,
      required: [true, "Semester is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: [true, "This email is already with another student"],
      required: [true, "Email is required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone is required"],
    },
    aadhar: {
      type: Number,
      unique: [true, "Please enter correct aadhar number"],
      required: [true, "Aadhar is required"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "Transgender"],
      required: [true, "Gender is required"],
    },
    dob: {
      type: String,
      required: [true, "DOB is required"],
    },
    religion: {
      type: String,
    },
    pinCode: {
      type: Number,
      required: [true, "Pin Code is required"],
    },

    parentName: {
      type: String,
      required: [true, "parent name is required"],
    },
    parentEmail: {
      type: String,
    },
    parentAadhar: {
      type: Number,
      required: [true, "parent aadhar is required"],
    },
    avatar: {
      public_id: {
        type: "string",
      },
      secure_url: {
        type: "string",
      },
    },
    aadharDoc: {
      type: Buffer,
      required: [true, "Please upload your aadhar card"],
    }, //Store the PDF as a binary buffer
    secondaryCertificate: {
      type: Buffer,
      required: [true, "Please Upload your secondary certificate"],
    },
    secondaryMarksheet: {
      type: Buffer,
      required: [true, "Please Upload your secondary marksheet"],
    },
    seniorSecondaryCertificate: {
      type: Buffer,
    },
    seniorSecondaryMarksheet: {
      type: Buffer,
    },
  },
  { timestamps: true }
);

const Admission = model("Admission", admissionSchema);
export default Admission;
