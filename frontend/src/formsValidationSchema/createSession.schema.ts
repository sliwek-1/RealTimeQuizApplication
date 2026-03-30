import * as yup from "yup";



export const createSessionValidationSchema = yup.object({
    title: yup.string().required("To pole jest wymagane"),
    description: yup.string().required("To pole jest wymagane"),
    status: yup.string().required(),
    isAccountRequired: yup.bool().required(),
    isWarnings: yup.bool().required(),
    answerTime: yup.number().required(),
    examTime: yup.number().required(),
})

