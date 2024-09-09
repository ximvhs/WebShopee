import { useQuery } from '@tanstack/react-query'
import AsideFitter from './AsideFitter'
import Product from './Product'
import SortProductList from './SortProductList'
import useQueryParams from '../../hooks/useQueryParams'
import productApi from '../../apis/product.api'

export default function ProducList() {
  const queryParams = useQueryParams()
  const { data } = useQuery({
    queryKey: ['product', queryParams],
    queryFn: () => {
      return productApi.getProducts(queryParams)
    }
  })
  console.log(data)
  return (
    <div className='py-6 bg-gray-200'>
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFitter></AsideFitter>
          </div>
          <div className='col-span-9'>
            <SortProductList></SortProductList>
            <div className='grid grid-cols-2 gap-3 mt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {Array(30)
                .fill(0)
                .map((_, index) => (
                  <div className='col-span-1' key={index}>
                    <Product />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
