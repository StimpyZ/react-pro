import { useState } from 'react'

export default function useProducts () {

    const [counter, setCounter] = useState(0)

    const handleIncrease = (value: number): void => {

        setCounter((prevState) => Math.max(prevState + value, 0))

    }

    return { counter, handleIncrease }

}
