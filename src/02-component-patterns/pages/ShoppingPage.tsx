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
                className="text-white bg-gray-700"
                initialValues={{
                    quantity: 0,
                    maxQuantity: 6
                }}
            >
                {({ handleIncrease, handleReset, quantity, isMaxQuantityReached, maxQuantity }) => (
                    <>
                        <ProductCard.Image className="rounded-xl p-2 shadow" />
                        <ProductCard.Title title="" />
                        <ProductCard.Buttons className="" />
                        <div className=" m-[10px] flex items-center">
                            <button
                                onClick={() => handleIncrease(-2)}
                                className="cursor-pointer bg-transparent border-[1px] border-white rounded-l-[5px] text-[20px] w-[30px] hover:bg-gray-400"
                            >
                                -
                            </button>
                            <strong className="border-b-[1px] border-t-[1px] text-[16px] h-[32px] pt-1 text-center w-[30px] border-white">
                                {quantity}
                            </strong>
                            {!isMaxQuantityReached && (
                                <button
                                    onClick={() => handleIncrease(2)}
                                    className="cursor-pointer  border-white hover:bg-gray-400 bg-transparent border-[1px] rounded-r-[5px] text-[20px] w-[30px]"
                                >
                                +
                                </button>
                            )}

                        </div>
                        <button
                            onClick={handleReset}
                            className="cursor-pointer border-white hover:bg-gray-400 bg-transparent border-[1px] block px-3 py-1 ml-3 rounded-[5px] text-[20px] w-[100px] mb-3"
                        >
                                Reset
                        </button>
                        <p>{`${quantity} -  ${maxQuantity}`}</p>
                    </>
                )}
            </ProductCard>
        </div>
    )

}
