import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserProvider from "./context/userProvider";
import CartProvider from "./context/cartProvider";
import DirectoryProvider from "./context/directoryProvider";
import ShopProvider from "./context/ShopProvider";

ReactDOM.render(
  <ShopProvider>
    <DirectoryProvider>
      <CartProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CartProvider>
    </DirectoryProvider>
  </ShopProvider>,

  document.getElementById("root")
);
