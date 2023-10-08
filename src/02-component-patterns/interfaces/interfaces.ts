import { type Props as ProductCardProps } from '../components/ProductCard'
import { type Props as ProductCardTitleProps } from '../components/ProductCardTitle'
import { type Props as ProductCardButtonsProps } from '../components/ProductCardButtons'
import { type Props as ProductCardImageProps } from '../components/ProductCardImage'

export interface Product {
    id: string
    title: string
    img?: string
}

export interface ProductContextProps {
    counter: number
    handleIncrease: (value: number) => void
    product: Product
    maxQuantity?: number
}

export interface ProductCardHOCProps {
    ({ product, children, style, className, onChange }: ProductCardProps): JSX.Element
    Title: ({ title, className, style }: ProductCardTitleProps) => JSX.Element
    Image: ({ className, style }: ProductCardImageProps) => JSX.Element
    Buttons: ({ className, style }: ProductCardButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product
    quantity: number
}

export interface InitialValues {
    quantity?: number
    maxQuantity?: number
}

export interface ProductCardHandlers {
    quantity: number
    isMaxQuantityReached: boolean
    maxQuantity?: number
    product: Product
    handleIncrease: (value: number) => void
    handleReset: () => void
}
