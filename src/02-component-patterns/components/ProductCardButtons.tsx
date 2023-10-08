import { useCallback, useContext } from 'react'
import { ProductContext } from './ProductCard'

export interface Props {
    className?: string
    style?: React.CSSProperties
}
export default function ProductCardButtons ({ className, style }: Props) {

    const { handleIncrease, counter, maxQuantity } = useContext(ProductContext)

    const isMaxReached = useCallback(
        () => counter === maxQuantity,
        [counter, maxQuantity]
    )

    return (
        <div
            style={style}
            className={`${className} m-[10px] flex items-center`}
        >
            <button
                onClick={() => handleIncrease(-1)}
                className="cursor-pointer bg-transparent border-[1px] border-white rounded-l-[5px] text-[20px] w-[30px] hover:bg-gray-400"
            >
                -
            </button>
            <strong className="border-b-[1px] border-t-[1px] text-[16px] h-[32px] pt-1 text-center w-[30px] border-white">
                {counter}
            </strong>
            <button
                disabled={isMaxReached()}
                onClick={() => handleIncrease(1)}
                className={`${isMaxReached() ? 'text-gray-400 border-gray-400 border-l-white cursor-not-allowed' : 'cursor-pointer  border-white hover:bg-gray-400'} bg-transparent border-[1px] rounded-r-[5px] text-[20px] w-[30px]`}
            >
                +
            </button>
        </div>
    )

}
