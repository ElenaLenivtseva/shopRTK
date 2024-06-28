import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filtredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
    error: false,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filtredProducts = filter;
        state.error = false;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (err) {
        return err;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct", saveState);
      } catch (err) {
        return err;
      }
    },
    filterGender(state, action) {
      try {
        const gender = state.filtredProducts.filter(
          (product) => product.gender === action.payload
        );
        state.error = false;
        state.filtredProducts = gender;
        const oneGenderType = gender;
        if (oneGenderType) {
          state.error = false;
          const saveState = JSON.stringify(gender);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filtredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    sortByPrice(state, action) {
      try {
        const price = state.filtredProducts.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        state.filtredProducts = price;
        let count = price.length;
        if (count > 1) {
          const noError = false;
          state.error = noError;
          if (!noError) {
            state.filtredProducts = price;
            const saveState = JSON.stringify(price);
            sessionStorage.setItem("filteredData", saveState);
          }
        } else {
          state.error = true;
          state.filtredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    filterByColor(state, action) {
      try {
        const color = state.filtredProducts.filter((product) =>
          product.color.includes(action.payload)
        );
        state.error = false;
        state.filtredProducts = color;
        if (color.length <= 0) {
          state.error = true;
          state.filtredProducts = [];
        } else {
          state.error = false;
          state.filtredProducts = color;
          const saveState = JSON.stringify(color);
          sessionStorage.setItem("filteredData", saveState);
        }
      } catch (err) {
        return err;
      }
    },
    filterBySize(state, action) {
      try {
        const size = state.filtredProducts.filter((product) =>
          product.size.includes(action.payload)
        );
        state.error = false;
        state.filtredProducts = size;
        if (size.length <= 0) {
          state.error = true;
          state.filtredProducts = [];
        } else {
          state.error = false;
          state.filtredProducts = size;
          const saveState = JSON.stringify(size);
          sessionStorage.setItem("filteredData", saveState);
        }
      } catch (err) {
        return err;
      }
    },
  },
});
export const {
  filterProducts,
  singleProduct,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} = productsSlice.actions;
export default productsSlice.reducer;
