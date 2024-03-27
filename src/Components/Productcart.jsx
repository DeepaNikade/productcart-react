import React, { useReducer } from 'react';
import './Productcart.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        ProductData: state.ProductData.map((elem) => {
          if (elem.id === action.payload.id) {
            return { ...elem, quantity: elem.quantity + 1 };
          } else {
            return elem;
          }
        }),
      };
    case 'decrease':
      return {
        ...state,
        ProductData: state.ProductData.map((elem) => {
          if (elem.id === action.payload.id && elem.quantity > 0) {
            return { ...elem, quantity: elem.quantity - 1 };
          } else {
            return elem;
          }
        }),
      };
    default:
      return state;
  }
};

const Productcart = () => {
  const initialState = {
    ProductData: [
      { id: 1, name: 'Product-1', quantity: 0, price: 100 },
      { id: 2, name: 'Product-2', quantity: 0, price: 200 },
      { id: 3, name: 'Product-3', quantity: 0, price: 300 },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  let totalPrice = state.ProductData.reduce((acc, curr) => (acc += curr.price * curr.quantity), 0);

  return (
    <div className="container">
      <div className="left">
        <h3>Products</h3>
        {state.ProductData.map((elem, index) => {
          return (
            <div className="productcart" key={index}>
              <h4>{elem.name}</h4>
              <h4>{elem.price}</h4>
              <div className="button">
                <p
                  onClick={() => {
                    dispatch({ type: 'increase', payload: elem });
                  }}
                >
                  +
                </p>
                <p>{elem.quantity}</p>
                <p
                  onClick={() => {
                    dispatch({ type: 'decrease', payload: elem });
                  }}
                >
                  -
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="right">
        <h3>Cart</h3>
        {state.ProductData.map((elem, index) => {
          if (elem.quantity > 0) {
            return (
              <div className="productcart" key={index}>
                <h4>{elem.name}</h4>
                <h4>{elem.price} * {elem.quantity}</h4>
              </div>
            );
          } else {
            return null;
          }
        })}
        <h3>Total: {totalPrice}</h3>
      </div>
    </div>
  );
};

export default Productcart;
