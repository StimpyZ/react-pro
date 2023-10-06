import { useContext } from 'react'
import noImg from '../assets/no-image.jpg'
import { ProductContext } from './ProductCard'

export interface Props {
    className?: string
    style?: React.CSSProperties
}

export default function ProductCardImage ({ className, style }: Props) {

    const { product } = useContext(ProductContext)

    return (
        <img
            style={style}
            className={`${className} w-full`}
            src={product.img ?? noImg}
            alt="coffe mug image"
        />
    )

}
