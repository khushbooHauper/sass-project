import React, { useState ,useContext} from 'react'
import '../scss/styles/productcard.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { CartContext, TCartItem } from '../context/CartContext'
export type Tproduct = {
    id: number,
     title: string,
     price: number,
      description: string,
       category: string,
       brand: string,
        image: string,
        rating: { rate: number, count: number },
         popularity: number
         }
  
const ProductCard = ({ product }: { product: Tproduct }) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [showWishlist, setShowWishlist] = useState(false);
    const cartContext = useContext(CartContext);
    const { addToCart } = cartContext || {};
  
    const handleAddToCart = () => {
      if (addToCart) {
        const item: TCartItem = {
          id: product.id,
          title: product.title,
          price:product.price,
          brand:product.brand,
          image:product.image
          // Include other properties of the cart item
        };
        addToCart(item);
        
      }
    };
    const openCard = ()=>{
        navigate(`/productdetails/${product.id}`);
       
    }
  return (
    <div className='card'  onMouseEnter={() => setShowWishlist(true)}
    onMouseLeave={() => setShowWishlist(false)}>
    <img src={product.image} onClick={openCard}/>
    <div className='card-body'>
    
    {showWishlist ? (
      <>  
       <div className='wish-btn-size-container'>
        <button className='wishlist-button'>
          <i className="fa fa-heart"></i> WISHLIST
          </button>
          <span>Rating: {product.rating.rate}</span>
          <p>Rs. {product.price}</p>
          <button className='add-to-cart-button'onClick={handleAddToCart}><Link to="/cartNew">add to cart</Link></button>
      </div>
          
          </>
        ):(<div><h5 className='clipped-text'>{product.title}</h5>
        <p>Rs. {product.price}</p>
        <p>{product.brand}</p>
       </div>)}
       
    </div>
    </div>
  )
}

export default ProductCard
