import * as yup from 'yup'

const ReviewValidation = yup.object().shape({
    Comment: yup
        .string()
        .required("Comment is required")
        .max(150, "Comment should be less than 150 characters"),
    rating: yup.number().required("Select a rating")
})

const movieValidation = yup.object().shape({
    name: yup
        .string()
        .required("Please enter a movie name")
        .max(50, "Movie name should be less than 50 character"),
    time:yup.number().required("Please enter the movie duration"),
    language:yup.string().required("Please enter the movie language"),
    year:yup.number().required("Please enter year of release"),
    category:yup.string().required("Please enter the movie category"),
    desc:yup.string().required("Please enter the movie duration").max(300,"Movie description should be less than 300 characters")
    
})

export { ReviewValidation,movieValidation }