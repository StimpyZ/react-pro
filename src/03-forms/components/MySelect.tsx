import { ErrorMessage, useField } from 'formik'

interface MyTextInputProps {
    label: string
    id: string
    name: string
    [x: string]: any
}

export default function MySelect ({ label, ...props }: MyTextInputProps) {

    const [field] = useField(props)

    return (
        <>
            <div className="relative z-0 w-full mb-10 group">
                <label htmlFor={props.name} className="sr-only">{label}</label>
                <select
                    {...field}
                    {...props}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                />

                <p className="text-red-500 text-sm">
                    <ErrorMessage name={props.name} />
                </p>

            </div>
        </>
    )

}
