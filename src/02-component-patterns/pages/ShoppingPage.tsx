import { ProductCard, ProductCardButtons, ProductCardImage, ProductCardTitle } from '../components'
import { type Product } from '../interfaces/interfaces'

const product: Product[] = [
    {
        id: '1',
        title: 'Coffee',
        img: '/coffee-mug.png'
    },
    {
        id: '2',
        title: 'Tea'
    }
]

export default function ShoppingPage () {

    return (
        <div>
            <h1 className="text-4xl font-bold mb-3">ShoppingPage</h1>
            <hr />
            <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4'>
                {product.map(items => (
                    <ProductCard style={{ backgroundColor: 'burlywood' }} key={items.id} product={items} className='text-white'>
                        <ProductCard.Image className='' />
                        <ProductCard.Title title='' className='text-white'/>
                        <ProductCard.Buttons className=''/>
                    </ProductCard>
                ))}

                <ProductCard product={product[0]} className=''>
                    <ProductCardImage className='' />
                    <ProductCardTitle title='' className='text-sm'/>
                    <ProductCardButtons className='text-red-900'/>
                </ProductCard>

                <ProductCard product={product[0]} >
                    <ProductCardImage />
                    <ProductCardTitle title=''/>
                    <ProductCardButtons/>
                </ProductCard>
            </div>
        </div>
    )

}
