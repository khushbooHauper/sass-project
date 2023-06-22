import React, { useState } from 'react'
import '../scss/styles/cardrespo.scss'
import { useNavigate, useParams } from 'react-router-dom'
export type Tproduct = {
    id: number,
     title: string,
     price: number,
      description: string,
       category: string,
        image: string,
        brand:string,
        rating: { rate: number, count: number },
         popularity: number
         }
  
const CardRespo = ({ product }: { product: Tproduct }) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [showWishlist, setShowWishlist] = useState(false);

    const openCard = ()=>{
        navigate(`/product/${product.id}`);
    }
  return (
    <div className='card-responsive' onClick={openCard} onMouseEnter={() => setShowWishlist(true)}
    onMouseLeave={() => setShowWishlist(false)}>
    <img src={product.image}/>
    <div className='card-body-responsive'>
    
    {showWishlist ? (
      <>
          <button className='wishlist-button'>
          <i className="fa fa-heart"></i> WISHLIST
          </button>
          <p>Sizes: 38</p>
          </>
        ):(<div><span className='clipped-text'>{product.brand}</span>
       </div>)}
       <p>Rs. {product.price}</p>
    </div>
    </div>
  )
}

export default CardRespo
