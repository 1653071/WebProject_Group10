import React, {useEffect, useReducer} from "react";

import { PageHeader } from "antd";
import GridProduct from "./Grid/GridProduct";
import SearchBar from "../../components/SearchBar/SearchBar";
import { SearchbarWrapper ,ProductArea} from "./HomePage.style";
import { instance } from "../../ultils/ultils";
import Banner from "./Banner/Banner";
import AppContext from '../../context/ProductContext'
export default function HomePage() {
const initialState ={
  items:[],
  query:''
}
const reducer = function(state, action){
   switch(action.type){
     case 'init':
       return{
         items:action.payload.items,
         query:action.payload.query,
       }
       
    default:
      return state;
   }
}
const [store , dispatch] = useReducer(reducer, initialState);
useEffect(() => {
  async function fetchData() {
    // You can await here
    const res = await instance.get("/products");
    
    console.log(res.date);
    dispatch({
      type: 'init',
      payload: {
        items: res.data,
        query: ''
      }
    });
  };
  fetchData();
}, []);
  
  return (
    <AppContext.Provider value={{store, dispatch}}>
      <Banner>
    
      </Banner>
      
      <ProductArea>
      <GridProduct title = "Sản phẩm sắp hết phiên" />
      <GridProduct title = "Sản phẩm được ra giá nhiều nhất"/>
      <GridProduct title = "Sản phẩm có giá cao nhất"/>
      </ProductArea>
    </AppContext.Provider>
  );
}
