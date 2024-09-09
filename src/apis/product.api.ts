import { Product, ProductListConfig, ProductList } from '../types/product.type'
import http from '../utils/http'
import { SuccesResponse } from '../types/utils.type'

const URL = 'product'
const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccesResponse<ProductList>>(URL, {
      params
    })
  },
  getProductDetail(id: string) {
    return http.get<Product>(`${URL}/${id}`)
  }
}

export default productApi
