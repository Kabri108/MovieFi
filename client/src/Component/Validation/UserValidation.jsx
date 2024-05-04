import * as yup from 'yup'

//login validation

const LoginValidation =yup.object().shape({
    email: yup.string().email().required("Email is required").trim(),
    password:yup.string()
    .required("Password is required")
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must be less than 20 characters')
    .matches(/(?=.*[0-9])/,
        'Password must contain a number'
      )
  });
const RegisterValidation =yup.object().shape({
    email: yup.string().email().required("Email is required").trim(),
    password:yup.string()
    .required("Password is required")
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must be less than 20 characters')
    .matches(/(?=.*[0-9])/,
        'Password must contain a number'
      ),
      fullname: yup
      .string()
      .required('FullName is required')
      .min(3, 'Username must be at least 3 characters long')
      .max(3, 'FullName must be less than 20 characters')
      .matches(/^[a-zA-Z]*$/,'Full name must contains only letters')
  });


  export {LoginValidation,RegisterValidation }