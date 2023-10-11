import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().min(3).max(60).required(),
    email: yup.string().required(),
    password: yup.string().min(6).max(30).required(),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), "confirmed password not matched!"])
      .required(),
  })
  .required();
