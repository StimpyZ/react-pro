import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function FormikComponents () {

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">
                Formik Components
            </h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {

                    console.log(values)

                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .required('Required')
                        .min(3, 'Must be 3 characters or more'),
                    lastName: Yup.string()
                        .required('Required')
                        .min(3, 'Must be 3 characters or more'),
                    email: Yup.string()
                        .required('Required')
                        .email('Invalid email address'),
                    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
                    jobType: Yup.string().required('Required')
                })}
            >
                {() => (
                    <Form className="max-w-3xl mx-auto border-black border-1 bg-gray-800 py-4 px-10 text-white rounded-xl shadow">
                        <div className="relative z-0 w-full mb-10 group">
                            <Field
                                name="firstName"
                                type="text"
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                id="firstName"
                                placeholder=" "
                            />
                            <p className="text-red-500 text-sm">
                                <ErrorMessage name="firstName" />
                            </p>
                            <label
                                htmlFor="firstName"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Enter your first name
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-10 group">
                            <Field
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                name="lastName"
                                type="text"
                                placeholder=" "
                            />
                            <p className="text-red-500 text-sm">
                                <ErrorMessage name="lastName" />
                            </p>
                            <label
                                htmlFor="lastName"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Enter your last name
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-10 group">
                            <Field
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                name="email"
                                type="email"
                                placeholder=" "
                            />
                            <p className="text-red-500 text-sm">
                                <ErrorMessage name="email" />
                            </p>
                            <label
                                htmlFor="email"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-10 group">
                            <label htmlFor="jobType" className="sr-only">Underline select</label>
                            <Field id="jobType" name='jobType' className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer" as='select'>
                                <option defaultValue=''>Choose a Job</option>
                                <option value="programer">Programmer</option>
                                <option value="Ingeniero">Ingeniero</option>
                                <option value="Youtuber">Youtuber</option>
                                <option value="Streamer">Streamer</option>
                            </Field>
                            <p className="text-red-500 text-sm flex-1">
                                <ErrorMessage name="jobType" />
                            </p>
                        </div>

                        <div className="relative z-0 w-full mb-10 group flex flex-col   ">
                            <div className='flex gap-2 items-center'>
                                <label htmlFor="terms">Terms and conditions</label>
                                <Field
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    className='mt-1'
                                />
                            </div>
                            <p className="text-red-500 text-sm flex-1">
                                <ErrorMessage name="terms" />
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-5 w-full"
                        >
                            Register new account
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )

}
