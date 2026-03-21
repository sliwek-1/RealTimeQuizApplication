import * as yup from "yup";


const loginValidationSchema = yup.object({
    email: yup.string().email("To nie jest email").required("To pole jest wymagane"),
    password: yup.string().min(8, "Hasło musi mieć przynajmniej 8 znaków").required("To pole jest wymagane")
})

const registerValidationSchema = yup.object({
    name: yup.string().required("To pole jest wymagane"),
    surrname: yup.string().required("To pole jest wymagane"),
    login: yup.string().required("To pole jest wymagane"),
    email: yup.string().email("To nie jest email").required("To pole jest wymagane"),
    password: yup.string().min(8, "Hasło musi mieć przynajmniej 8 znaków").required("To pole jest wymagane")
})


export { loginValidationSchema, registerValidationSchema };