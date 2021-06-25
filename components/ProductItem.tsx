/* eslint-disable react/display-name */
import { memo, useState } from 'react'
import { AddProductToWishListProps } from './AddProductToWishList'
import dynamic from 'next/dynamic'
//import { AddProductToWishList } from './AddProductToWishList'

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
    return import('./AddProductToWishList').then(mod => mod.AddProductToWishList)
}, {
    loading: () => <span>Carregando...</span>
})

interface ProductItemProps {
    product: {
        id: number,
        price: number,
        title: string
    }
    onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    const [isAddToWishList, setAddToWishList] = useState(false)
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
            <button onClick={() => { setAddToWishList(true) }}> Adicionar ao favoritos </button>
            {isAddToWishList &&
                (
                    <AddProductToWishList
                        onAddToWishList={() => { onAddToWishList(product.id) }}
                        onRequestClose={() => { setAddToWishList(false) }} />
                )
            }
        </div>
    )
}


export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})

/**
* 1- pure functional Component
* 2- renders too often
* 3- Re-renders with same props
* 4- Medium to big size
*/
