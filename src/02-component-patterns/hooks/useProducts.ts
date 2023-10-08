import { useEffect, useRef, useState } from 'react'
import {
    type InitialValues,
    type Product,
    type onChangeArgs
} from '../interfaces/interfaces'

interface useProductsArgs {
    product: Product
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

export default function useProducts ({
    onChange,
    product,
    value = 0,
    initialValues
}: useProductsArgs) {

    const [counter, setCounter] = useState(initialValues?.quantity ?? value)
    const isMounted = useRef(false)

    useEffect(() => {

        if (!isMounted.current) return
        setCounter(value)

    }, [value])

    const handleIncrease = (value: number): void => {

        const newValue = Math.max(counter + value, 0)
        if (
            initialValues?.maxQuantity != null &&
            newValue > initialValues?.maxQuantity
        ) {

            return

        }
        setCounter(newValue)

        onChange != null && onChange({ quantity: newValue, product })

    }

    const handleReset = (): void => {

        setCounter(initialValues?.quantity ?? 0)

    }

    return {
        counter,
        handleIncrease,
        isMaxQuantityReached: !((initialValues?.quantity) == null) && initialValues?.maxQuantity === counter,
        handleReset
    }

}
