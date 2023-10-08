import useProducts from '../hooks/useProducts'
import { createContext } from 'react'
import {
    type ProductCardHandlers,
    type InitialValues,
    type onChangeArgs,
    type Product,
    type ProductContextProps
} from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

export interface Props {
    product: Product
    // children?: ReactElement | ReactElement[]
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string
    style?: React.CSSProperties
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

export default function ProductCard ({
    product,
    children,
    className,
    style,
    onChange,
    value,
    initialValues
}: Props) {

    const { counter, handleIncrease, isMaxQuantityReached, handleReset } = useProducts({ onChange, product, value, initialValues })

    return (
        <ProductContext.Provider
            value={{
                counter,
                handleIncrease,
                product,
                maxQuantity: initialValues?.maxQuantity
            }}
        >
            <div
                className={`${className} bg-white rounded-[15px] text-black pb-[5px] w-[250px] mr-[5px] mt-[5px]`}
                style={style}
            >
                {children({
                    quantity: counter,
                    isMaxQuantityReached,
                    maxQuantity: initialValues?.maxQuantity,
                    product,
                    handleIncrease,
                    handleReset
                })}
            </div>
        </ProductContext.Provider>
    )

}
