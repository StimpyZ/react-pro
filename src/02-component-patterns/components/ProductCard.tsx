import useProducts from '../hooks/useProducts'
import { type ReactElement, createContext } from 'react'
import {
    type Product,
    type ProductContextProps
} from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
    className?: string
    style?: React.CSSProperties
}

export default function ProductCard ({
    product,
    children,
    className,
    style
}: Props) {

    const { counter, handleIncrease } = useProducts()

    return (
        <ProductContext.Provider
            value={{
                counter,
                handleIncrease,
                product
            }}
        >
            <div
                className={`${className} bg-white rounded-[15px] text-black pb-[5px] w-[250px] mr-[5px] mt-[5px]`}
                style={style}
            >
                {children}
            </div>
        </ProductContext.Provider>
    )

}
