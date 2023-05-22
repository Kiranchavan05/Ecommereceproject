import React, { useReducer } from "react";

const SignContext = React.createContext({
  login: (token) => {},
  logout: () => {},
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  token: localStorage.getItem("token"),
  email: localStorage.getItem("email"),
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
  token: localStorage.getItem("token"),
  email: localStorage.getItem("email"),
};

const cartReducer = (state, action) => {
  // login
  if (action.type === "login") {
    localStorage.setItem("token", action.token);
    localStorage.setItem("email", action.email);

    return {
      ...state,
      token: action.token,
      email: action.email,
    };
  }
  //logout
  if (action.type === "logout") {
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    return {
      ...state,
      email: "",
      token: "",
      items: [],
      totalAmount: 0,
    };
  }
  //ADD

  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingCartitemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartitem = state.items[existingCartitemIndex];

    let updateditems;
    if (existingCartitem) {
      const updatedItem = {
        ...existingCartitem,

        quantity: existingCartitem.quantity + action.item.quantity,
      };
      updateditems = [...state.items];
      updateditems[existingCartitemIndex] = updatedItem;
    } else {
      updateditems = state.items.concat(action.item);
    }
    return { ...state, 
      items: updateditems,
       totalAmount: updatedAmount };
  }


  //REMOVE
  if(action.type==='REMOVE'){
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
        
      );
      console.log( existingCartItemIndex)
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };

  }

  return defaultCartState;
};

export const SignContextProvider = (props) => {
  // const loggedIn = token ? true : false;

  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchAction({ type: "REMOVE", id:id });
  };

  const loginHandler = (token, email) => {
    // setToken(token);
    // localStorage.setItem('token',token)
    dispatchAction({ type: "login", token: token, email: email });
  };

  const logoutHandler = () => {
    // setToken(null);
    // localStorage.removeItem('token')
    dispatchAction({ type: "logout" });
  };

  const signContext = {
    token: cartState.token,
    addItem: addItemToCartHandler,
    login: loginHandler,
    logout: logoutHandler,
    removeItem: removeItemToCartHandler,
    email: cartState.email,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
  };

  return (
    <SignContext.Provider value={signContext}>
      {props.children}
    </SignContext.Provider>
  );
};

export default SignContext;
