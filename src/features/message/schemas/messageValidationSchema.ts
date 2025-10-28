import * as Yup from 'yup'

export const messageValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email format is invalid'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters long'),
})