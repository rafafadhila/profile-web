'use client'

import useFormMessage from "../hooks/useFormMessage"

export default function FormMessage() {
  const { formik } = useFormMessage()

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5 py-2"
    >
      <div className="flex flex-col gap-1">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`bg-white text-black font-semibold w-full px-5 py-3 rounded-md shadow-md ${
            formik.touched.name && formik.errors.name ? 'border border-red-500' : ''
          }`}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`bg-white text-black font-semibold w-full px-5 py-3 rounded-md shadow-md ${
            formik.touched.email && formik.errors.email ? 'border border-red-500' : ''
          }`}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-1 md:col-span-2">
        <textarea
          name="message"
          placeholder="Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`bg-white text-black font-semibold w-full px-5 py-3 rounded-md h-32 shadow-md ${
            formik.touched.message && formik.errors.message ? 'border border-red-500' : ''
          }`}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-sm">{formik.errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="btn bg-indigo-800 text-white font-semibold px-5 py-3 rounded-md hover:bg-indigo-600 transition-colors md:col-span-2 disabled:opacity-70"
      >
        {formik.isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
