import { type ReactElement } from 'react'

export interface Product {
    id: string
    title: string
    img?: string
}

export interface ProductCardProps {
    product: Product
    children?: ReactElement | ReactElement[]
}

export interface ProductContextProps {
    counter: number
    handleIncrease: (value: number) => void
    product: Product
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element
    Title: ({ title }: { title: string }) => JSX.Element
    Image: () => JSX.Element
    Buttons: () => JSX.Element
}
