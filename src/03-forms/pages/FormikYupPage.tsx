import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function FormikYupPage () {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {

            console.log(values)

        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('Required')
                .min(3, 'Must be 3 characters or more'),
            lastName: Yup.string()
                .required('Required')
                .min(3, 'Must be 3 characters or more'),
            email: Yup.string()
                .required('Required')
                .email('Invalid email address')
        })
    })

    return (
        <div>
            <form
                noValidate
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto border-black border-1 bg-gray-800 py-4 px-10 text-white rounded-xl shadow"
            >
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Register
                </h1>
                <div className="relative z-0 w-full mb-10 group">
                    <input
                        {...getFieldProps('firstName')}
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    {(touched.firstName ?? false) &&
                        errors.firstName != null && (
                        <p className="text-red-500 text-sm">
                            {errors.firstName}
                        </p>
                    )}
                    <label
                        htmlFor="firstName"
                        className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter your first name
                    </label>
                </div>

                <div className="relative z-0 w-full mb-10 group">
                    <input
                        {...getFieldProps('lastName')}
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    {(touched.lastName ?? false) && errors.lastName != null && (
                        <p className="text-red-500 text-sm">
                            {errors.lastName}
                        </p>
                    )}
                    <label
                        htmlFor="lastName"
                        className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Enter your last name
                    </label>
                </div>

                <div className="relative z-0 w-full mb-10 group">
                    <input
                        {...getFieldProps('email')}
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    {(touched.email ?? false) && errors.email != null && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
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
