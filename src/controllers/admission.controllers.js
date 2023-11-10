import Admission from "../models/admission.models.js";
import cloudinary from "cloudinary";
import fs from "fs";
import AppError from "../utils/error.utils.js";
import sendEmail from "../utils/sendMail.utils.js";
import User from "../models/user.models.js";

/*1======================admission======================*/
const admission = async (req, res, next) => {
  try {
    /*----------------------take data from frontend ----------------------*/
    const {
      course,
      name,
      email,
      phone,
      aadhar,
      state,
      gender,
      dob,
      religion,
      pinCode,
      parentName,
      parentEmail,
      parentAadhar,
    } = req.body;

    const avatarPic = req.files["avatar"][0];
    const aadharDoc = fs.readFileSync(req.files["aadharDoc"][0].path);
    const secondaryCertificate = fs.readFileSync(
      req.files["secondaryCertificate"][0].path
    );
    const secondaryMarksheet = fs.readFileSync(
      req.files["secondaryMarksheet"][0].path
    );

    /*----------------------set session & semester according to seleted course----------------------*/
    let courseDuration = 3;
    if (course[0] === "I" || course[0] === "M") {
      courseDuration = 2;
    }
    const session = `2021-${2021 + courseDuration}`;
    const semester = "I";

    /*----------------------Data validation----------------------*/
    if (
      !avatarPic ||
      !aadharDoc ||
      !course ||
      !name ||
      !email ||
      !phone ||
      !aadhar ||
      !state ||
      !gender ||
      !dob ||
      !pinCode ||
      !parentName ||
      !parentEmail ||
      !parentAadhar
    ) {
      res.status(400).json({
        success: false,
        message: "Admission :: All fields are required",
      });
    }

    /*----------------------Check Admission already or not with aadhar & email----------------------*/
    const alreadyAdmission = await Admission.find({ aadhar, email });
    if (alreadyAdmission.length !== 0) {
      res.status(404).json({
        success: false,
        message: "Your admission already in this college",
      });
    }

    /*----------------------Generate password----------------------*/
    const password = name.substring(0, 4) + aadhar.substring(0, 6);

    /*----------------------New Admission----------------------*/
    const newAdmission = await Admission.create({
      name,
      email,
      course,
      phone,
      aadhar,
      state,
      semester,
      session,
      gender,
      religion,
      dob,
      pinCode,
      parentName,
      parentEmail,
      parentAadhar,
      aadharDoc,
      secondaryCertificate,
      secondaryMarksheet,
      avatar: {
        public_id: email,
        secure_url:
          "https://th.bing.com/th?q=Avatar+Emoji&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      },
    });

    /*----------------------Check user created or not if not then----------------------*/
    if (!newAdmission) {
      res.status(404).json({
        success: false,
        message: "Admission :: Admission failed",
      });
    }

    /*----------------------send email with username & password----------------------*/
    sendEmail(
      "",
      "RDC,Admission Registration successful",
      `Your admission registration is accepted, your username is ${email} and password is ${password}, I'll recommend to change your password`
    );

    /*----------------------file(avatar) upload on cloudinary----------------------*/
    if (avatarPic) {
      try {
        const result = await cloudinary.v2.uploader.upload(avatarPic.path, {
          folder: "lms", // Save files in a folder named lms
          width: 250,
          height: 250,
          gravity: "faces", // This option tells cloudinary to center the image around detected faces (if any) after cropping or resizing the original image
          crop: "fill",
        });

        if (result) {
          newAdmission.avatar.public_id = result.public_id;
          newAdmission.avatar.secure_url = result.secure_url;
        }
      } catch (err) {
        return new AppError(
          `file not uploaded please try again, ERROR: ${err}`,
          500
        );
      }
    }
    await newAdmission.save();

    /*----------------------Create user profile----------------------*/
    const profile = await User.create({
      course,
      email,
      password,
      session: "2021-2024",
      semester: "I",
      name,
      avatar: {
        public_id: newAdmission.avatar.public_id,
        secure_url: newAdmission.avatar.secure_url,
      },
    });
    /*----------------------check profile created or not, if not then try again----------------------*/
    if (!profile) {
      await User.create({
        course,
        email,
        password,
        session: "2021-2024",
        semester: "I",
        name,
        avatar: {
          public_id: newAdmission.avatar.public_id,
          secure_url: newAdmission.avatar.secure_url,
        },
      });
    }

    profile.password = undefined;
    /*----------------------Response Success----------------------*/
    res.status(201).json({
      success: true,
      message: "Admission :: Admission Registration Successful",
      data: profile,
    });
  } catch (error) {
    return new AppError(
      `Admission :: Admission failed,Error: ${error.message}`,
      400
    );
  }

  //1: take data from the frontend part
  //2: data validation
  //3: check if the user/student did not enrolled any other course at same time period (aadharNo,email)
  //4: Generate unique username/id or also use email & password (this password is temporarily)
  //5:password encryption
  //5: store data in database (mongoDB) with username/id & password
  //6: send username, password & admission response on user email and also send in response
  //   **** exception handling
};

/*2======================admission renewable======================*/
const admissionRenewable = async (req, res, next) => {
  res.send("admission renewale");
};

/*3======================admission payment======================*/
const admissionPayment = async (req, res, next) => {
  res.send("admission payment");
};

/*4======================admission status======================*/
const admissionStatus = async (req, res, next) => {
  res.send("admission status");
};

export { admission, admissionPayment, admissionStatus, admissionRenewable };
