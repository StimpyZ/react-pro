import { ErrorMessage, useField } from 'formik'

interface Props {
    label: string
    id: string
    name: string
    type?: 'text' | 'email' | 'checkbox'
    placeholder?: string
    [x: string]: any
}

export default function MyTextInput ({ label, ...props }: Props) {

    const [field] = useField(props)

    return (
        <>
            <div className="relative z-0 w-full mb-10 group">
                <input
                    {...field}
                    {...props}
                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <p className="text-red-500 text-sm">
                    <ErrorMessage name={props.name} />
                </p>
                <label
                    htmlFor={props.name}
                    className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    {label}
                </label>
            </div>
        </>
    )

}
