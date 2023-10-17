import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components'

export default function FormikAbstractation () {

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">
                Formik Abstractation
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
                        <MyTextInput label='First Name' name='firstName' id='firstName' placeholder=' '/>
                        <MyTextInput label='Last Name' name='lastName' id='lastName' placeholder=' '/>
                        <MyTextInput label='Email' name='email' id='email' type='email' placeholder=' '/>
                        <MySelect label='Job type' id='jobType' name='jobType'>
                            <option defaultValue=''>Choose a Job</option>
                            <option value="programer">Programmer</option>
                            <option value="Ingeniero">Ingeniero</option>
                            <option value="Youtuber">Youtuber</option>
                            <option value="Streamer">Streamer</option>
                        </MySelect>
                        <MyCheckbox name='terms' id='terms' label='Terms and conditions'/>
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
