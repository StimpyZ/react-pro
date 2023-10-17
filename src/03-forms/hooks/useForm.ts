import { useState } from 'react'

export default function useForm <T> (initState: T) {

    const [form, setForm] = useState(initState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        console.log(form)
        handleReset()

    }
    const handleReset = () => setForm(initState)
    return { handleSubmit, handleChange, ...form, handleReset }

}
