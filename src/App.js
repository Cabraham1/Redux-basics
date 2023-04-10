import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { calculateTotal } from './features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store) => store.cart)
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems, dispatch])

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App