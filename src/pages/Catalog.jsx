import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Categories,
  SortPopup,
  Product,
  ProductsLoading,
  Search,
  AddToCartButton,
} from "../components";
import { addProductToCart } from "../redux/actions/cart";
import { fetchProducts } from "../redux/actions/products";

import { setCategory, setSortBy, setSearch } from "../redux/actions/filters.js";

const categoriesName = ["Macbook", "Iphone", "Ipad", "AirPods", "TV"];
const sortItems = [
  { name: "рейтингу", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "в наличии", type: "available", order: "desc" },
];

function Catalog() {
  const dispatch = useDispatch();

  const items = useSelector(({ products }) => products.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ products }) => products.isLoaded);
  const { sortBy, category, search } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchProducts(sortBy, category, search));
  }, [dispatch, category, sortBy, search]);

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const onSelectSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  const onSelectSearch = useCallback(
    (event) => {
      dispatch(setSearch(event.target.value));
    },
    [dispatch]
  );

  const handleAddProductToCart = (ojb) => {
    dispatch(addProductToCart(ojb));
  };

  return (
    <main>
      <section className="products-lists container">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesName}
        />
        <div className="sort-search_wrapper">
          <SortPopup
            ActiveSortType={sortBy.type}
            items={sortItems}
            onClickSortType={onSelectSortType}
            onClickSearch={onSelectSearch}
          />

          <Search onClickSearch={onSelectSearch} />
        </div>
        <div className="products-content grid-container">
          <ul className="product-grid elastic" id="products">
            {isLoaded
              ? items.map((obj) => (
                  <li className="product-grid__item" key={obj.id}>
                    <article className="product">
                      <Product key={obj.id} {...obj} />
                      <AddToCartButton
                        onClick={() => handleAddProductToCart({ ...obj })}
                        countProductAdded={
                          cartItems[obj.id] && cartItems[obj.id].length
                        }
                      />
                    </article>
                  </li>
                ))
              : Array(16)
                  .fill(0)
                  .map((_, index) => <ProductsLoading key={index} />)}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Catalog;
