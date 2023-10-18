import data from '../data/custom-form.json'
import { Formik, Form } from 'formik'
import { MySelect, MyTextInput } from '../components'
import * as Yup from 'yup'

const initialValues: Record<string, any> = {}
const requiredFields: Record<string, any> = {}

for (const formValues of data) {

    initialValues[formValues.name] = formValues.value
    if (formValues.validations === undefined) continue
    let schema = Yup.string()
    for (const rule of formValues.validations) {

        if (rule.type === 'required') {

            schema = schema.required('Required')

        }

    }
    requiredFields[formValues.name] = schema

}

const validationSchema = Yup.object({ ...requiredFields })

export default function DynamycForm () {

    return (
        <>
            <h1 className="text-4xl font-black text-center mb-16">
                Dynamyc Form
            </h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, { resetForm }) => {

                    console.log(values)
                    resetForm()

                }}
                validationSchema={validationSchema}
            >
                {() => (
                    <Form className="max-w-3xl mx-auto border-black border-1 bg-gray-800 py-4 px-10 text-white rounded-xl shadow">
                        {data.map(({ id, label, name, type, options, placeholder }) => {

                            if (
                                type === 'text' ||
                                type === 'email' ||
                                type === 'password'
                            ) {

                                return (
                                    <MyTextInput
                                        key={name}
                                        label={label}
                                        id={name}
                                        name={name}
                                        placeholder={placeholder}
                                        type="text"
                                    />
                                )

                            } else if (type === 'select') {

                                return (
                                    <MySelect
                                        key={id}
                                        label={label}
                                        id={name}
                                        name={name}
                                    >
                                        <option defaultValue="">Choose a Game</option>
                                        {options?.map((option) => (
                                            <option key={option.id} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </MySelect>
                                )

                            }
                            return (
                                <span key={id}>
                                    Type: {type} no es soportado
                                </span>
                            )

                        })}
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-5 w-full"
                        >
                            Register new account
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )

}
