import { ProductCard } from '../components'

const product = {
    id: '1',
    title: 'Coffee',
    img: '/coffee-mug.png'
}

export default function ShoppingPage () {

    return (
        <div>
            <h1 className="text-4xl font-bold mb-3">ShoppingPage</h1>
            <hr />
            <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4'>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title=''/>
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    )

}
