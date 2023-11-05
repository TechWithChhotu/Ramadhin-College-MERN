import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
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
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    avatar: {
      public_id: {
        type: "string",
      },
      secure_url: {
        type: "string",
      },
    },
    forgotPasswordToken: String,
    forgotPasswordExpire: Date,
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
