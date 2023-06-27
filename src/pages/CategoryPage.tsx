import React, { useState, useEffect } from "react";
import "../scss/styles/categorypage.scss"
import Home from "./Home";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import CardRespo from "../components/CardRespo";
import { Footer, MainHeader } from "../components";
const categoryFilterResponsiveArray = [
  "Gender",
  "Categories",
  "Size",
  "Price",
  "Brand",
  "Color",
  "Discount Range",
  "Country of Origin",
  "More Filters",
];
const API_URL = process.env.PUBLIC_URL + '/api-response/myData.json';
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const CategoryPage = () => {
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
  const { category, title } = useParams();
  const filteredData = data.filter((item) => item.category === category);
  const [sortBy, setSortBy] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const leftColumnItems = [
    { id: 1, name: "Gender" },
    { id: 2, name: "Size" },
    { id: 3, name: "Price" },
    { id: 4, name: "Brand" },
    { id: 5, name: "Color" },
    { id: 6, name: "Discount Range" },
    { id: 7, name: "Country of Origin" },
    { id: 8, name: "More Filters" },
  ];

  const rightColumnItems = [
    { id: 1, name: ["Boys", "Girls", "Women", "Men"], category: 1 },
    { id: 2, name: ["S", "M", "L", "XL", "XXL", "free"], category: 2 },
    { id: 3, name: ["1000", "2000", "3000", "4000"], category: 3 },
    {
      id: 4,
      name: [
        "H&M",
        "Mufti",
        "Forever21",
        "Gucci",
        "Avaasa",
        "Mars",
        "Anouk",
        "Athena",
      ],
      category: 4,
    },
    {
      id: 5,
      name: [
        "Red",
        "Blue",
        "White",
        "Black",
        "Purple",
        "Grey",
        "Yellow",
        "Orange",
      ],
      category: 5,
    },
    {
      id: 6,
      name: [
        "10% & Higher",
        "20% & Higher",
        "30% & Higher",
        "40% & Higher",
        "50% & Higher",
        "60% & Higher",
        "70% & Higher",
        "80% & Higher",
        "90% & Higher",
      ],
      category: 6,
    },
    { id: 7, name: ["All Countries", "India"], category: 7 },
    { id: 8, name: ["Refine your search"], category: 8 },
  ];

  const [selectedItem, setSelectedItem] = useState<number | undefined>(
    undefined
  );

  const filteredRightColumnItems = rightColumnItems.filter(
    (item) => item.category === selectedItem
  );
  const toggleFilterOptions = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const toggleSortOptions = () => {
    setIsSortOpen(!isSortOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sortData = (data: any, sortOption: any) => {
    if (sortOption === "highToLow") {
      return [...data].sort((a, b) => b.price - a.price);
    } else if (sortOption === "lowToHigh") {
      return [...data].sort((a, b) => a.price - b.price);
    } else if (sortOption === "popularity") {
      return [...data].sort((a, b) => b.popularity - a.popularity);
    } else {
      return data;
    }
  };

  const sortedData = sortData(filteredData, sortBy);

  const handleSortChange = (event: any) => {
    event.preventDefault();
    const selectedOption = event.target.dataset.sort || "";
    setSortBy(selectedOption);
  };

  const handleBrandFilter = (brand: string): void => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const filteredByBrand = sortedData.filter((product: any) => {
    if (selectedBrands.length === 0) {
      return true; // Show all products if no brand is selected
    }
    return selectedBrands.includes(product.brand);
  });
  return (
    <>
    <MainHeader/>
    <div className="Link-page-container">
      {!isMobile && (
        <div className="breadcrumbs">
          <p>
            Home / {category} / <b>{title}</b>
          </p>
          <p>
            <b>{title}</b> - {filteredData.length} items
          </p>
          <div className="filter-dropdown">
            <span className="h5-heading-black">FILTERS</span>
            <div className="dropdown">
              <button className="dropdown-toggle">Sort by</button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#" data-sort="popularity" onClick={handleSortChange}>
                    Popularity
                  </a>
                </li>
                <li>
                  <a href="#" data-sort="lowToHigh" onClick={handleSortChange}>
                    <b>Price:</b>Low to High
                  </a>
                </li>
                <li>
                  <a href="#" data-sort="highToLow" onClick={handleSortChange}>
                    <b>Price:</b>High to Low
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="filter-category-cards-container">
        {!isMobile && (
          <div className="filters-column">
            {/* <div className="category-div">
            <h5>CATEGORIES</h5>
            <div>
              <input type="checkbox" />
              <label>Kurta Sets(34,444)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Kurtas(60,124)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Dhotis Sets(4,673)</label>
            </div>
          </div> */}
            <div className="category-div">
              <div className="brand-search-div">
                <h5>BRAND</h5>
                <span className="search-brand">
                  <i className="fa  fa-search"></i>
                </span>
              </div>
              {sortedData.map((s: any) => (
                <div key={s.id}>
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(s.brand)}
                    onChange={() => handleBrandFilter(s.brand)}
                  />
                  <label>{s.brand}</label>
                </div>
              ))}
              {/* <div>
              <input type="checkbox" />
              <label>SOJANYA(4460)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>DEYANN(4105)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>KISAH(3234)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Jompers(2262)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>VASTRAMAY(1555)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Anouk(1336)</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Sanwara(1234)</label>
            </div> */}
              {/* <div>
              <input type="checkbox" />
              <label>See Designs(1229)</label>
            </div> */}
              <div className="pink-text">+ 225 more</div>
            </div>
            <div className="category-div">
              <h5>PRICE</h5>
              <div>
                <input type="checkbox" />
                <label>Rs. 219 to Rs. 9165(43209)</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Rs. 9165 to Rs. 18111(202)</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Rs. 18111 to Rs. 27057(14)</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Rs. 27057 to Rs. 36003(4)</label>
              </div>
            </div>
            <div className="category-div">
              <div className="brand-search-div">
                <h5>COLOR</h5>
                <span className="search-brand">
                  <i className="fa  fa-search"></i>
                </span>
              </div>
              <div>
                <input type="checkbox" />
                <label>Blue (4708)</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Green (4105)</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Black (3208)</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>White (3062)</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Maroon (2786)</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Yellow (2518)</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Sanwara(1234)</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Navy Blue (2392)</label>
              </div>
              <div className="pink-text">+ 37 more</div>
            </div>
            <div className="category-div-discount">
              <h5>DISCOUNT RANGE</h5>
              <div>
                <input type="checkbox" />
                <label>10% and above</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>20% and above</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>30% and above</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>40% and above</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>50% and above</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>60% and above</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>70% and above</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>80% and above</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>90% and above</label>
              </div>
            </div>
          </div>
        )}

        <div className="cards-column">
          {filteredByBrand?.map((a: any) => (
            <div key={a.id}>
              {isMobile ? (
                <CardRespo product={a} />
              ) : (
                <ProductCard product={a} />
              )}
            </div>
          ))}
          <div>
            {isMobile && (
              <>
                <div className={`sort-options ${isSortOpen ? "open" : ""}`}>
                  <span>SORT BY</span>
                  <p className="line-grey"></p>
                  <p>
                    <i className="fa fa-fire" style={{ color: "grey" }}></i>{" "}
                    <a
                      href="#"
                      data-sort="popularity"
                      onClick={handleSortChange}
                    >
                      Popularity
                    </a>
                  </p>
                  <p onClick={handleSortChange}>
                    <i
                      className="fa fa-arrow-down"
                      style={{ color: "grey" }}
                    ></i>{" "}
                    <a
                      href="#"
                      data-sort="highToLow"
                      onClick={handleSortChange}
                    >
                      <b>Price:</b>High to Low
                    </a>
                  </p>
                  <p onClick={handleSortChange}>
                    <i className="fa fa-arrow-up" style={{ color: "grey" }}></i>{" "}
                    <a
                      href="#"
                      data-sort="lowToHigh"
                      onClick={handleSortChange}
                    >
                      <b>Price:</b>Low to High
                    </a>
                  </p>
                </div>
                {isFilterOpen && (
                  <div className="filter-overlay">
                    <div className="filter-options">
                      <div className="filter-clearall">
                        <span>FILTERS</span>
                        <span className="pink">CLEAR ALL</span>
                      </div>
                      <div className="category-content-container">
                        <div className="left">
                          {leftColumnItems.map((item) => (
                            <div
                              key={item.id}
                              className={`left-item ${
                                selectedItem === item.id ? "selected" : ""
                              }`}
                              onClick={() => setSelectedItem(item.id)}
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                        <div className="right">
                          {filteredRightColumnItems.length > 0 ? (
                            <ul>
                              {filteredRightColumnItems.map((item) => (
                                <li key={item.id}>
                                  <ul>
                                    {item.name.map((itemName, index) => (
                                      <div
                                        key={index}
                                        className="check-mark-icon"
                                      >
                                        <i
                                          className="fa fa-check"
                                          style={{ color: "grey" }}
                                        ></i>{" "}
                                        <li key={index}>{itemName}</li>
                                      </div>
                                    ))}
                                  </ul>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>No items to display</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="filter-footer">
                      <span
                        className="close-button"
                        onClick={toggleFilterOptions}
                      >
                        CLOSE
                      </span>
                      <span className="apply-button pink">APPLY</span>
                    </div>
                  </div>
                )}
                <div className="fixed-footer">
                  <span className="sort-button" onClick={toggleSortOptions}>
                    {" "}
                    <i
                      className="fa fa-sort"
                      style={{ color: "grey" }}
                    ></i>{" "}
                    Sort
                  </span>
                  <span className="filter-button" onClick={toggleFilterOptions}>
                    {" "}
                    <i
                      className="fa fa-filter"
                      style={{ color: "grey" }}
                    ></i>{" "}
                    Filter
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CategoryPage;
