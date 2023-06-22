import React, { useState } from 'react'
import '../scss/styles/productcard.scss'
import { useNavigate, useParams } from 'react-router-dom'
export type Tproduct = {
    id: number,
     title: string,
     price: number,
      description: string,
       category: string,
        image: string,
        rating: { rate: number, count: number },
         popularity: number
         }
  
const ProductCard = ({ product }: { product: Tproduct }) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [showWishlist, setShowWishlist] = useState(false);

    const openCard = ()=>{
        navigate(`/productdetails/${product.id}`);
    }
  return (
    <div className='card' onClick={openCard} onMouseEnter={() => setShowWishlist(true)}
    onMouseLeave={() => setShowWishlist(false)}>
    <img src={product.image}/>
    <div className='card-body'>
    
    {showWishlist ? (
      <>  
       <div className='wish-btn-size-container'>
        <button className='wishlist-button'>
          <i className="fa fa-heart"></i> WISHLIST
          </button>
          <span>Rating: {product.rating.rate}</span>
          <p>Rs. {product.price}</p>
      </div>
          
          </>
        ):(<div><h5 className='clipped-text'>{product.title}</h5>
        <p>Rs. {product.price}</p>
       </div>)}
       
    </div>
    </div>
  )
}

export default ProductCard
