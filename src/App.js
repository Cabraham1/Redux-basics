import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotal } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";

const App = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
