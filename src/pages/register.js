import React from "react";
import Formcomp from "../components/form";
import "./register.css";
import * as yup from "yup";
import "yup-phone";

const Register = () => {
  const initialvals = {
    studentfname: "",
    studentlname: "",
    studentdob: "",
    studentgender: "",
    studentsibdetails: "",
    studentaddress: "",
    studentcity: "",
    studentpayment: "",

    fatherfname: "",
    fatherlname: "",
    fatherqualification: "",
    fatherphn: "",
    fatheremail: "",
    fatheroccup: "",

    motherfname: "",
    motherlname: "",
    motherqualification: "",
    motherphn: "",
    motheremail: "",
    motheroccup: "",

    termsofServices: false,
  };
  const validation = () => {
    return yup.object().shape({
      studentfname: yup
        .string()
        .required("First Name Required")
        .min(2, "Invalid First Name"),
      studentlname: yup
        .string()
        .required("Last Name Required")
        .min(2, "Invalid Last Name"),
      studentdob: yup.string().required("Date of Birth Required"),
      studentgender: yup.string().required("Please choose Gender"),
      studentsibdetails: yup.string(),
      studentaddress: yup.string().required(" Required"),
      studentcity: yup.string().required(" Required"),
      studentpayment: yup.string().required("Choose one Payment Method"),

      fatherfname: yup
        .string()
        .required("First Name Required")
        .min(2, "Invalid First Name"),
      fatherlname: yup
        .string()
        .required("Last Name Required")
        .min(2, "Invalid Last Name"),
      fatherqualification: yup.string().required("Required"),
      fatherphn: yup.string().phone("NP").required("Required"),
      fatheremail: yup.string().required(" Required").email("Invalid email"),
      fatheroccup: yup.string().required(" Required"),

      motherfname: yup
        .string()
        .required("First Name Required")
        .min(2, "Invalid First Name"),
      motherlname: yup
        .string()
        .required("Last Name Required")
        .min(2, "Invalid Last Name"),
      motherqualification: yup.string(),
      motherphn: yup.string().phone("NP").required(),
      motheremail: yup.string().email("Invalid email"),
      motheroccup: yup.string().required(" Required"),

      termsofService: yup.bool().oneOf([true], "Field must be checked"),
    });
  };

  return (
    <div>
      <div className="title">
        <h2>Student Registration Form</h2>
      </div>
      <div className="form">
        <Formcomp validation={validation} initialvals={initialvals} />
      </div>
    </div>
  );
};

export default Register;
