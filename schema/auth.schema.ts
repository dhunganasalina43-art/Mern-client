import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

// register schema
export const registerSchema = yup.object({
  email: yup.string().email().required(),
  full_name: yup.string().required("full name is a required field"),
  password: yup.string().required().min(6),
  //   c_pass
  c_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "password must match"),
  // phone
  phone: yup
  .string()
  .required()
  .oneOf([yup.ref("phone")], "phone numbers must match"),
});
