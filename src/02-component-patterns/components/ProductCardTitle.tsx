import { useContext } from 'react'
import { ProductContext } from './ProductCard'

export default function ProductCardTitle ({ title }: { title: string }) {

    const { product } = useContext(ProductContext)
    const trimmedTitle = title.trim()
    return (
        <p className="m-[10px]">{trimmedTitle !== '' ? trimmedTitle : product.title}</p>
    )

}
