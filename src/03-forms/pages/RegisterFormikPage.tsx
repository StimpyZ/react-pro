import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'

export default function RegisterFormikPage () {

    return (
        <>
            <h1 className="text-4xl font-black text-center mb-16">
                Register Formik Page
            </h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    repeatPassword: ''
                }}
                onSubmit={(values, { resetForm }) => {

                    console.log(values)
                    resetForm()

                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string().required('Required').min(2, 'Must be 2 characters or more').max(15, 'Must be 15 characters or less'),
                        email: Yup.string().required('Required').email('Invalid email address'),
                        password: Yup.string().required('Required').min(6, 'Must be 6 characters or more'),
                        repeatPassword: Yup.string().required('Required').min(6, 'Must be 6 characters or more').oneOf([Yup.ref('password')], 'Passwords must match')
                    })
                }
            >
                {
                    () => (
                        <Form className="max-w-3xl mx-auto border-black border-1 bg-gray-800 py-4 px-10 text-white rounded-xl shadow">
                            <MyTextInput label='Enter your name' id='name' name='name' placeholder=' ' type='text'/>
                            <MyTextInput label='Enter your email' id='email' name='email' placeholder=' ' type='email'/>
                            <MyTextInput label='Enter your password' id='password' name='password' placeholder=' ' type='password'/>
                            <MyTextInput label='Repeat your password' id='repeatPassword' name='repeatPassword' placeholder=' ' type='password'/>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-5 w-full"
                            >
                            Register new account
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </>
    )

}
