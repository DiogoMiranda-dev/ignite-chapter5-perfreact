//import { useMemo } from 'react'
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
    results: Array<{ id: number, price: number, title: string }>
    totalPrice: number
    onAddToWishList: (id: number) => void
}
export function SearchResults({ results,totalPrice, onAddToWishList }: SearchResultsProps) {

   /*  const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price
        }, 0)
    }, [results]) */

    return (
        <div>
            <h2>{totalPrice}</h2>
            {results.map(product => {
                return (
                    <ProductItem 
                        key={product.id} 
                        product={product} 
                        onAddToWishList={onAddToWishList} />
                )
            })}
        </div>
    )
}


/**
 * useMemo()
 *
 */
