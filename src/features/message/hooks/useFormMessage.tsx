'use client'

import { useFormik } from 'formik'
import { messageValidationSchema } from '../schemas/messageValidationSchema'
import { axiosInstance } from '@/utils/axios-instance'
import { toast } from 'react-toastify'

export default function useFormMessage() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: messageValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axiosInstance.post('/auth/message', {
          name: values.name,
          email: values.email,
          message: values.message,
        })

        toast.success(response?.data?.message || 'Message sent successfully!')
        resetForm()
      } catch (error) {
        const axiosError = error as { response?: { data?: { message?: string } } }
        toast.error(axiosError?.response?.data?.message || 'Failed to send message')
      }
    },
  })

  return {
    formik,
  }
}
