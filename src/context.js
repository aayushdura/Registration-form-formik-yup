import { createContext } from "react";
import { useFormik } from "formik";
// import { useNavigate } from "react-router";
import * as yup from "yup";
import "yup-phone";

export const AppContext = createContext();
// const navigate = useNavigate();
function AppContextProvider(props) {
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
  const formik = useFormik({
    initialValues: initialvals,
    validationSchema: validation,
    onSubmit: () => {
      console.log(formik.values);
      if (formik.isValid === true) {
        alert("Registered");
        // navigate("/success");
        // localStorage.setItem("userData", JSON.stringify(formik.values));
      }
    },
  });
  const values = formik.values;
  const handleSubmit = formik.handleSubmit;
  const errors = formik.errors;
  const touched = formik.touched;
  const getFieldProps = formik.getFieldProps;
  const handleChange = formik.handleChange;
  const handleBlur = formik.handleBlur;

  return (
    <AppContext.Provider
      value={
        (handleSubmit,
        errors,
        touched,
        getFieldProps,
        handleChange,
        handleBlur,
        values)
      }
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
