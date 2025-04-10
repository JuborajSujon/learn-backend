import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Address from "./../../components/modules/cart/Address";

export interface ICartProduct extends IProduct {
  orderQuantity: number;
}

interface InitialState {
  products: ICartProduct[];
  city: string;
  shippingAddress: string;
}

const initialState: InitialState = {
  products: [],
  city: "",
  shippingAddress: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        return;
      }
      state.products.push({ ...action.payload, orderQuantity: 1 });
    },
    incrementOrderQuantity: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToIncrement) {
        productToIncrement.orderQuantity += 1;
        return;
      }
    },
    decrementOrderQuantity: (state, action) => {
      const productToIncrement = state.products.find(
        (product) => product._id === action.payload
      );

      if (productToIncrement && productToIncrement.orderQuantity > 1) {
        productToIncrement.orderQuantity -= 1;
        return;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    updateCity: (state, action) => {
      state.city = action.payload;
    },
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    clearCart: (state) => {
      state.products = [];
      state.city = "";
      state.shippingAddress = "";
    },
  },
});

// products
export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};

//* Payment
export const subTotalSelector = (state: RootState) => {
  return state.cart.products.reduce((acc, product) => {
    if (product.offerPrice) {
      console.log(product.offerPrice);
      return acc + product.offerPrice * product.orderQuantity;
    } else {
      console.log(product.price, "Price");
      return acc + product.price * product.orderQuantity;
    }
  }, 0);
};

// Address
export const citySelector = (state: RootState) => {
  return state.cart.city;
};

export const shippingAddressSelector = (state: RootState) => {
  return state.cart.shippingAddress;
};

export const {
  addProduct,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeProduct,
  updateCity,
  updateShippingAddress,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
