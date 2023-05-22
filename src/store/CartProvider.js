// import CartContext from "./Cart-Context";
// import React, {useReducer} from "react";

// const defaultCartState={
//     items:[],
//     totalAmount:0,
// }

// const cartReducer=(state, action)=>{
//     if (action.type === 'ADD'){

//         const updatedAmount = state.totalAmount + action.item.price * action.item.quantity

//         const existingCartitemIndex = state.items.findIndex((item) => item.id === action.item.id)
//         const existingCartitem = state.items[existingCartitemIndex]

//         let updateditems 
//         if(existingCartitem){
//             const updatedItem = {
//                 ...existingCartitem,
//                 quantity : existingCartitem.quantity + action.item.quantity
//             }
//             updateditems = [...state.items]
//             updateditems[existingCartitemIndex] = updatedItem
//         } else {
//             updateditems = state.items.concat(action.item)
//         }
//         return {
//             items : updateditems,
//             totalAmount : updatedAmount
//         }
//     }

//     return defaultCartState
// };


// const CartProvider=(props)=>{

//     const [cartState, dispatchCartAction]=useReducer(cartReducer,defaultCartState)

//     const addItemToCartHandler=(item)=>{
//         dispatchCartAction({type:'ADD', item:item})
//     }

//     const removeItemToCartHandler=(id)=>{
//         dispatchCartAction({type:'REMOVE', id:id })
//     }

//     const cartContext={
//         items:cartState.items,
//         totalAmount:cartState.totalAmount,
//         addItem: addItemToCartHandler,
//         removeItem:removeItemToCartHandler

//     }

//     return <CartContext.Provider value={cartContext}>
//         {props.children}
//     </CartContext.Provider>

// }

// // export default CartProvider