import { ProductCard } from '../components'
import { product } from '../constants/products'

const items = product[0]

export default function ShoppingPage (): JSX.Element {

    return (
        <div>
            <h1 className="text-4xl font-bold mb-3">ShoppingPage</h1>
            <hr />
            <ProductCard
                key={items.id}
                product={items}
                initialValues={{
                    quantity: 0
                    // maxQuantity:
                }}
            >
                {() => (
                    <>
                        <ProductCard.Image />
                        <ProductCard.Title title="" />
                        <ProductCard.Buttons />

                    </>
                )}
            </ProductCard>
        </div>
    )

}
