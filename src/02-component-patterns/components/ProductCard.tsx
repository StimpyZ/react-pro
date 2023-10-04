import useProducts from '../hooks/useProducts'
import { createContext } from 'react'
import { type ProductCardProps, type ProductContextProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)

export default function ProductCard ({ product, children }: ProductCardProps) {

    const { counter, handleIncrease } = useProducts()

    return (
        <ProductContext.Provider value={{
            counter,
            handleIncrease,
            product
        }}>
            <div className="bg-white rounded-[15px] text-black pb-[5px] w-[250px] mr-[5px] mt-[5px]">
                {children}
            </div>
        </ProductContext.Provider>
    )

}
