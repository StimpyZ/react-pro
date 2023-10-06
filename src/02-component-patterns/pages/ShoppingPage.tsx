import {
    ProductCard,
    ProductCardButtons,
    ProductCardImage,
    ProductCardTitle
} from '../components'
import { product } from '../constants/products'
import useShoppingCart from '../hooks/useShoppingCart'

export default function ShoppingPage (): JSX.Element {

    const { onProductCountChange, shoppingCart } = useShoppingCart()
    return (
        <div>
            <h1 className="text-4xl font-bold mb-3">ShoppingPage</h1>
            <hr />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
                {product.map((items) => (
                    <ProductCard
                        style={{ backgroundColor: 'burlywood' }}
                        key={items.id}
                        product={items}
                        className="text-white"
                        onChange={onProductCountChange}
                        value={shoppingCart[items.id]?.quantity ?? 0}
                    >
                        <ProductCard.Image className="" />
                        <ProductCard.Title title="" className="text-white" />
                        <ProductCard.Buttons className="" />
                    </ProductCard>
                ))}

                <ProductCard
                    product={product[1]}
                    className="bg-gray-500 text-white"
                >
                    <ProductCardImage className="p-2 shadow rounded-[15px]" />
                    <ProductCardTitle title="" className="text-xl font-bold" />
                    <ProductCardButtons className="" />
                </ProductCard>

                <div className="fixed top-20 right-10 flex flex-col gap-4">
                    {Object.values(shoppingCart).map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onChange={onProductCountChange}
                            className='bg-gray-600   text-white'
                            style={{ width: '100px' }}
                            value={product.quantity}
                        >
                            <ProductCard.Image className="p-2 shadow rounded-[15px]" />
                            <ProductCard.Buttons className="" />
                        </ProductCard>
                    ))}
                </div>

            </div>
        </div>
    )

}
