import { useContext } from "react"
import { Product } from "../../components/Product"
import { ShopContext } from "../../context/shopeContext"
import products from '../../data/products.json'

const Cart = () => {
  const {cartItems} = useContext(ShopContext)
  return(
    <main className="w-100 d-flex flex-column">
      <h2 className="align-self-start px-2">Your Cart</h2>
      <section className="row w-100">
        {products.map((product, index) => {
          if(cartItems.some((item) => item.id === product.id && item.count > 0))
            return <Product data={product} key={index}></Product>
        })}
      </section>
    </main>
    
  )
}

export default Cart