import * as yup from "yup";

export const addQuestionValidationSchema = yup.object({
    id: yup.string().required(),
    question: yup.string().required("To pole jest wymagane"),
    type: yup.string().oneOf(['multiChoice', 'singleChoice'], 'Odpowiedzi muszą być jednokrotnego lub wielokrotnego wyboru').required(),
    answers: yup.array().of(
        yup.object({
            id: yup.string().required(),
            isCorrect: yup.boolean(),
            content: yup.string().required("Odpowiedzi nie mogą być puste").min(1)
        })
    ).min(2, 'Muszą być przynajmniej dwie odpowiedzi').required(),
    questionWeight: yup.number().required("To pole jest wymagane")
})

