import mongoose, { Schema, model } from "mongoose";

const admissionSchema = new Schema(
  {
    course: {
      type: String,
      required: [true, "Course name is required"],
      uppercase: true,
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
      required: [true, "Email is required"],
      unique: [true, "This email is already with another student"],
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    aadhar: {
      type: Number,
      required: [true, "Aadhar number is required"],
      unique: [true, "Please enter correct aadhar number"],
    },
    state: {
      type: String,
      required: [true, "State name is required"],
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "Transgender"],
      required: [true, "Gender is required"],
    },
    dob: {
      type: String,
      required: [true, "Date of birth is required"],
    },
    religion: {
      type: String,
    },
    pinCode: {
      type: Number,
      required: [true, "Pin code is required"],
    },

    parentName: {
      type: String,
      required: [true, "Parent Name is required"],
    },
    parentEmail: {
      type: String,
    },
    parentAadhar: {
      type: Number,
      required: [true, "Parent aadhar number is required"],
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
      required: [true, "please upload your aadhar"],
    }, //Store the PDF as a binary buffer
    secondaryCertificate: {
      type: Buffer,
      required: [true, "please upload your secondary certificate"],
    },
    secondaryMarksheet: {
      type: Buffer,
      required: [true, "please upload your secondary marksheet"],
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
