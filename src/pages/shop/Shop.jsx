import { Product } from '../../components/Product';
import ProductData from '../../data/products.json'

const Shop = () => {
  const products = ProductData;
  return(
    <main className='d-flex row w-100'>
      {products.map((product, index) => {
        return <Product data={product} key={index}/>
      })}
    </main>
  )
}

export default Shop