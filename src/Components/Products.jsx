import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MyContext } from "../context/Context";

function Products() {
  const { products, addToCart } = useContext(MyContext);

  return (
    <>
      {products.map((product) => {
        const { id, image, title, price } = product;
        return (
          <li
            className="border-slate-300 border rounded-md overflow-hidden h-[420px] shadow-md group p-1"
            key={id}
          >
            <Link to={`${id}`}>
              <img
                src={image}
                className="max-h-[300px] h-full w-full duration-200 group-hover:brightness-50"
              />
              <div className="p-3 pb-1 text-center">
                <h1 className="font-semibold text-sm h-5 overflow-hidden mb-1">
                  {title}
                </h1>
                <p className="font-bold text-xs text-[#FF324D]">${price}</p>
              </div>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="bg-[#FF324D] text-center border border-[#FF324D] hover:text-[#FF324D] ms-[40px] hover:bg-white border cursor-pointer rounded-3xl p-2 mt-2 text-white text-sm text-center ps-8 pe-8"
            >
              <FontAwesomeIcon className="w-3 pe-2" icon={faCartShopping} />
              Add To Cart
            </button>
          </li>
        );
      })}
    </>
  );
}

export default Products;
