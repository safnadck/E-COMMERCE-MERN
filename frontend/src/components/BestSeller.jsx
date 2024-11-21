import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const BestSeller = () => {

    const  {products} = useContext(ShopContext);

    const [BestSeller, SetBestSeller] = useState([]);

    useEffect(() => {
        const BestProduct = products.filter((item) => (item.BestSeller));
        SetBestSeller(BestProduct.slice(0,5))
    },[])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'} />
        </div>
    </div>
  )
}

export default BestSeller