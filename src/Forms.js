import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema=yup.object({
  email:yup.string()
  .email()
  .min(5,"need a bigger one"),
  password:yup.string()
  .min(8,"Need a bigger one"),
})
export function Forms() {
  const formik=useFormik({
    initialValues:{email:"", password:""},
    validationSchema:formValidationSchema,
    onSubmit:(values)=>{
      console.log("onSubmit",values)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
      type="email"
      placeholder="Enter your email"
      name="email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.touched.email && formik.errors.email ? formik.errors.email:""}
      <input
      type="password"
      placeholder="Enter your password"
      name="password"
      value={formik.values.password}
      onChange={formik.handleChange}/>
      {formik.errors.password}
      <button type="submit">Submit</button>
      {/* {JSON.stringify(formik.values)}
      {JSON.stringify(formik.touched)} */}
    </form>
    
  );
}
