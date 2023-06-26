import { Footer, Header, MainHeader, NotFound, Pagination, Skeleton } from "../components";
import { useAppDispatch } from "../redux/store";
import {
  setCategoryId,
  setCurrentPage,
  setSearchValue,
} from "../redux/filter/slice";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../scss/styles/men.scss'

const API_URL = process.env.PUBLIC_URL + '/api-response/myData.json';
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  brand:string;
  rating: {
    rate: number;
    count: number;
  };
}
const HomeFurnish: React.FC = () => {
    const [value,setValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));

    window.scrollTo(0, 0);
  };

  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data.data.products);
    // console.log(response.data.data.products, 'ksp data response');
    } catch (error) {
      console.error(error);
    }
  };
  const filteredData = data.filter((item) => item.category === "Home Furnishing");

  const openCard = (productId: number) => {
    navigate(`/productdetails/${productId}`);
    console.log(productId);
  };
  return (
    <>
      <MainHeader />
      <section className="catalog">
        <div className="container">
        <div className="search-section-title-container">
          <h3 className="catalog__title">Home & Furnishing Section</h3>
          <div className="catalog__filter-items">
            <div className="catalog__filter-item"></div>
            <div className="catalog__filter-item">
              <div className="catalog__search">
                <input value={value} type="text" placeholder="Enter your request" onChange={(e)=>setValue(e.target.value)}/>
              </div>
              
            </div>
          </div>
          </div>
          <div className="catalog__items">
            <div className="catalog__item item">
            {filteredData.map((f)=>(
              <div className="item__body" key={f.id} onClick={()=>openCard(f.id)}>
               
                    <div >
                <div className="item__img">
                  <a>
                    <img
                      src={f.image}
                      alt="men section"
                    />
                  </a>
                  <button aria-label="favoriteBtn" className="item__favorite">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.50061 1.89671C9.26233 0.314993 11.9848 0.367492 13.682 2.06771C15.3785 3.76868 15.437 6.47763 13.859 8.24459L7.49911 14.6135L1.14073 8.24459C-0.437237 6.47763 -0.377988 3.76418 1.31773 2.06771C3.01645 0.369742 5.73365 0.312743 7.50061 1.89671ZM12.62 3.12744C11.495 2.00096 9.68007 1.95521 8.50259 3.01269L7.50136 3.91118L6.49938 3.01344C5.31816 1.95446 3.50694 2.00096 2.37896 3.12894C1.26148 4.24642 1.20523 6.03514 2.23496 7.21711L7.49986 12.4903L12.7648 7.21786C13.7952 6.03514 13.739 4.24867 12.62 3.12744Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="item__info">
                  <div className="item__title">
                    <span style={{ verticalAlign: "inherit" }}>
                      <span style={{ verticalAlign: "inherit" }}>
                       {f.brand}
                      </span>
                    </span>
                  </div>
                  <div className="item__price">
                    <span style={{ verticalAlign: "inherit" }}>
                     Rs. {f.price}
                     
                    </span>
                  </div>
                  <div className="item__sizes">
                    <span style={{ verticalAlign: "inherit" }}>
                      <span style={{ verticalAlign: "inherit" }}>{f.rating.rate} </span>
                    </span>
                    <span style={{ verticalAlign: "inherit" }}>
                      <span style={{ verticalAlign: "inherit" }}>stars</span>
                    </span>
                  </div>
                </div>
                
                </div>
                
              </div>
              ))}
            </div>
          </div>
          <div className="pagination-style-right"> 
          <Pagination onClickPageChange={onChangeCurrentPage} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomeFurnish;
