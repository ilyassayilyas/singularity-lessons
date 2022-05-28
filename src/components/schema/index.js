import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, "Must be more than 4 digits")
    .max(15, "Must be less than 16 digits"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_-])[A-Za-z\d@$!%*#?&_-]{8,30}$/,
      "Should contain capital letter and at least 1 number and 1 spec symbol"
    )
    .required(),
  passwordConfirm: yup.string().oneOf([yup.ref("password")], null),
});

export default schema;
