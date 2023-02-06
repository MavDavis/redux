import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [
    {
      id: 17,
      title: "Incredible Steel Chips",
      price: 508,
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      images: "https://api.lorem.space/image/furniture?w=640&h=480&r=3900",
    },
  ],
};
export const productsReducer =(state = initialState, {type,payload})=>{
switch(type){
    case ActionTypes.SET_PRODUCTS:
        return state;
        default: return state
}
}  