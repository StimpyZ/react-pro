import { useState } from 'react'
import { type onChangeArgs, type Product } from '../interfaces/interfaces'

interface ProductInCart extends Product {
    quantity: number
}

export default function useShoppingCart () {

    const [shoppingCart, setShoppingCart] = useState<
    Record<string, ProductInCart>
    >({})

    const onProductCountChange = ({ product, quantity }: onChangeArgs) => {

        setShoppingCart(prev => {

            const productInCart = { ...prev }

            if (quantity === 0) {

                const { [product.id]: deletedProduct, ...rest } = productInCart
                return rest

            } else {

                productInCart[product.id] = {
                    ...product,
                    quantity
                }

                return productInCart

            }

        })

    }

    return { shoppingCart, onProductCountChange }

}
