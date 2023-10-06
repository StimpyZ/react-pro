import { useEffect, useRef, useState } from 'react'
import { type Product, type onChangeArgs } from '../interfaces/interfaces'

interface useProductsArgs {
    product: Product
    onChange?: (args: onChangeArgs) => void
    value?: number
}

export default function useProducts ({ onChange, product, value = 0 }: useProductsArgs) {

    const [counter, setCounter] = useState(value)
    const isControlled = useRef(!(onChange == null))

    useEffect(() => {

        setCounter(value)

    }, [value])

    const handleIncrease = (value: number): void => {

        if (isControlled.current) {

            return onChange?.({ quantity: value, product })

        }
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)

        onChange != null && onChange({ quantity: newValue, product })

    }

    return { counter, handleIncrease }

}
