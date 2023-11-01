import React, { useContext } from 'react'
import  {ShopContext}  from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../component/Breadcrums/Breadcrum'
import ProductDisplay from '../component/ProductDisplay/ProductDisplay';



const Product = () => {
  
  // const  all_product  = useContext(ShopContext); <= Error, soalnya context ngasihnya all_product sebagai object dulu, ga langsung array
  const  {all_product}  = useContext(ShopContext); // <= Hasil koreksi
  // const {productID} = useParams() <= Error karena ini, tulisannya harusnya productId (lihat : App.js)
  const {productId} = useParams() // <= Hasil koreksi
  // const product = all_product.find((e) => e.id === Number(productID)) <= Diganti karena productID menjadi productId
  const product = all_product.find((e) => e.id === Number(productId)) // <= Hasil koreksi
  // console.log("Product Data:", productID);


  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product