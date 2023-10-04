import { useContext } from 'react'
import noImg from '../assets/no-image.jpg'
import { ProductContext } from './ProductCard'

export default function ProductCardImage () {

    const { product } = useContext(ProductContext)

    return (
        <img
            className="w-full rounded-tl-[15px] rounded-tr-[15px]"
            src={product.img ?? noImg}
            alt="coffe mug image"
        />
    )

}
