import * as Yup from "yup";

const sessionValidationSchema = Yup.object({
    selectedStartDate: Yup.date()
    .required("Musisz podać datę rozpoczęcia")
    .min(new Date(), "Sesja nie może zacząć się w przeszłości"),
    
    selectedEndDate: Yup.date()
        .required("Musisz podać datę zakończenia")
        .min(
        Yup.ref('selectedStartDate'), 
        "Koniec sesji musi być po jej rozpoczęciu"
        )
})