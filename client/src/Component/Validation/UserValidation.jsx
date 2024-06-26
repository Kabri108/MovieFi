import * as yup from 'yup'

//login validation

const LoginValidation =yup.object().shape({
    email: yup.string().email().required("Email is required").trim(),
    password:yup.string()
    .required("Password is required")
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be less than 20 characters')
    .matches(/(?=.*[0-9])/,
        'Password must contain a number'
      )
  });

const RegisterValidation =yup.object().shape({
    email: yup.string().email().required("Email is required").trim(),
    password:yup.string()
    .required("Password is required")
    .min(6, 'Password must be at least 6 characters ')
    .max(20, 'Password must be less than 20 characters')
    .matches(/(?=.*[0-9])/,
        'Password must contain a number'
      ),
      fullName: yup
      .string()
      .required('FullName is required')
      .max(20, 'FullName must be less than 20 characters')
      .matches(/^[a-z A-Z\s]*$/,'Full name must contains only letters')
      
  });

  const ProfileValidation=yup.object().shape({
    fullName:yup
    .string()
    .required("Full name is required")
    .max(20, 'FullName must be less than 20 characters')
    .matches(/^[a-z A-Z]*$/,'Full name must contains only letters'),
    email: yup.string().email().required("Email is required").trim(),
  })




  export {LoginValidation,RegisterValidation,ProfileValidation }