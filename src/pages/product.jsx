import React, { useContext } from 'react'
import  {ShopContext}  from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../component/Breadcrums/Breadcrum'

const Product = () => {
  
  const {all_product} = useContext(ShopContext);
  const {productID} = useParams()
  const product = all_product.find((e) => e.id === Number(productID))

  return (
    <div>
      <Breadcrum product={product}/>
    </div>
  )
}

export default Product