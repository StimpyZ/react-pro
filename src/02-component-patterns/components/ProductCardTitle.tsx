import { useContext } from 'react'
import { ProductContext } from './ProductCard'

export interface Props {
    title: string
    className?: string
    style?: React.CSSProperties
}
export default function ProductCardTitle ({ title, className, style }: Props) {

    const { product } = useContext(ProductContext)
    const trimmedTitle = title.trim()
    return (
        <p style={style} className={`${className} m-[10px]`}>{trimmedTitle !== '' ? trimmedTitle : product.title}</p>
    )

}
