import ProductCardButtons from './ProductCardButtons'
import ProductCardImage from './ProductCardImage'
import ProductCardTitle from './ProductCardTitle'
import ProductCardHOC from './ProductCard'
import { type ProductCardHOCProps } from '../interfaces/interfaces'

export {
    ProductCardButtons,
    ProductCardImage,
    ProductCardTitle
}

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductCardTitle,
    Image: ProductCardImage,
    Buttons: ProductCardButtons
})
