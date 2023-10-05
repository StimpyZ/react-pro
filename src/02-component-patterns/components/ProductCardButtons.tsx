import { useContext } from 'react'
import { ProductContext } from './ProductCard'

export interface Props {
    className?: string
    style?: React.CSSProperties
}

export default function ProductCardButtons ({ className, style }: Props) {

    const { handleIncrease, counter } = useContext(ProductContext)

    return (
        <div style={style} className={`${className} m-[10px] flex items-center`}>
            <button
                onClick={() => handleIncrease(-1) }
                className="cursor-pointer bg-transparent border-[1px] border-black rounded-l-[5px] text-[20px] w-[30px] hover:bg-gray-400">
                    -
            </button>
            <strong className="border-b-[1px] border-t-[1px] text-[16px] h-[32px] pt-1 text-center w-[30px] border-black">
                {counter}
            </strong>
            <button
                onClick={() => handleIncrease(1)}
                className="cursor-pointer bg-transparent border-[1px] border-black rounded-r-[5px] text-[20px] w-[30px] hover:bg-gray-400">
                    +
            </button>
        </div>
    )

}
