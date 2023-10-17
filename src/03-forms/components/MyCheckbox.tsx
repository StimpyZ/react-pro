import { ErrorMessage, useField } from 'formik'

interface Props {
    label: string
    id: string
    name: string
    [x: string]: any
}

export default function MyCheckbox ({ label, ...props }: Props) {

    const [field] = useField({ ...props, type: 'checkbox' })

    return (
        <>
            <div className="relative z-0 w-full mb-10 group flex flex-col   ">
                <div className='flex gap-2 items-center'>
                    <label htmlFor={props.name}>{label}</label>
                    <input
                        type='checkbox'
                        {...field}
                        {...props}
                        className='mt-1'
                    />
                </div>
                <p className="text-red-500 text-sm">
                    <ErrorMessage name={props.name} />
                </p>
            </div>
        </>
    )

}
