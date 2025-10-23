import React from 'react'
import {productData} from '../data/tabGoods'

function Profile ({img, title, price}){
    return (
        <>
         <li>
            <p><img src={img} alt="" /></p>
            <h3>{title}</h3>
            <p>{price}</p>
         </li>
        </>
    )
}

const ComCombine3Object = () => {
  return (
    <div>
        <h2>상품리스트</h2>
        <ul className="goods-list">
            {productData.map(p=>{
                return <Profile img={p.image} title={p.name} price={p.price} />
            })}
        </ul>
    </div>
  )
}

export default ComCombine3Object