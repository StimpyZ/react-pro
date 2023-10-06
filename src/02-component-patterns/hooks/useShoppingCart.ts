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

            const productInCart: ProductInCart = prev[product.id] ?? { ...product, quantity: 0 }

            if (Math.max(productInCart.quantity + quantity, 0) > 0) {

                productInCart.quantity += quantity
                return {
                    ...prev,
                    [product.id]: productInCart
                }

            }

            const { [product.id]: toDelete, ...rest } = prev
            return rest

            // const productInCart = { ...prev }

            // if (quantity === 0) {

            //     const { [product.id]: deletedProduct, ...rest } = productInCart
            //     return rest

            // } else {

            //     productInCart[product.id] = {
            //         ...product,
            //         quantity
            //     }

            //     return productInCart

            // }

        })

    }

    return { shoppingCart, onProductCountChange }

}
