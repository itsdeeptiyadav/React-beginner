import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Productlist from "./components/Productlist.js";
import React, { useState } from "react";
import Footer from "./components/footer.js"

function App() {
  const products = [
    {
      Price: 11000,
      Name: "Redmi note 7 pro",
      Quantity: 0,
    },
    {
      Price: 18000,
      Name: "Realme 11",
      Quantity: 0,
    },
    {
      Price: 25000,
      Name: "oppo 15",
      Quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let[totalAmount, setTotalAmount]=useState(0);
  const resetQuantity=()=>{
    let newProductList = [...productList];
    newProductList.map((products)=>{
      products.Quantity=0;
    });
    setProductList(newProductList);
    setTotalAmount(0);

  }
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount=totalAmount;
    newProductList[index].Quantity++;
    newTotalAmount+=newProductList[index].Price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount=totalAmount;
    if(newProductList[index].Quantity > 0){
      newProductList[index].Quantity--
      newTotalAmount-=newProductList[index].Price;
    }  
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Productlist
          productList={productList}
          incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
