import { type FormikErrors, useFormik } from 'formik'

interface FormValues {
    firstName: string
    lastName: string
    email: string
}

export default function FormikBasicPage () {

    const validate = ({ email, firstName, lastName }: FormValues) => {

        const errors: FormikErrors<FormValues> = {}
        if (firstName.length === 0) {

            errors.firstName = 'Required'

        } else if (firstName.length < 3) {

            errors.firstName = 'Must be 3 characters or more'

        }

        if (lastName.length === 0) {

            errors.lastName = 'Required'

        } else if (lastName.length < 3) {

            errors.lastName = 'Must be 3 characters or more'

        }

        if (email.length === 0) {

            errors.email = 'Required'

        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {

            errors.email = 'Invalid email address'

        }
        return errors

    }

    const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {

            console.log(values)

        },
        validate
    })

    return (
        <div>
            <form
                noValidate
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto border-black border-1 bg-gray-800 py-4 px-10 text-white rounded-xl shadow">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Register
                </h1>
                <div className="relative z-0 w-full mb-10 group">
                    <input
                        onBlur={handleBlur}
                        value={values.firstName}
                        onChange={handleChange}
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    {(touched.firstName ?? false) && (errors.firstName != null) && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    <label
                        htmlFor="firstName"
                        className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter your first name
                    </label>
                </div>

                <div className="relative z-0 w-full mb-10 group">
                    <input
                        onBlur={handleBlur}
                        value={values.lastName}
                        onChange={handleChange}
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    {(touched.lastName ?? false) && (errors.lastName != null) && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    <label
                        htmlFor="lastName"
                        className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter your last name
                    </label>
                </div>

                <div className="relative z-0 w-full mb-10 group">
                    <input
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    {(touched.email ?? false) && (errors.email != null) && <p className="text-red-500 text-sm">{errors.email}</p>}
                    <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-5 w-full"
                >
                    Register new account
                </button>
            </form>
        </div>
    )

}
