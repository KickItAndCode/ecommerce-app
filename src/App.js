import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { BrowserRouter, Route } from "react-router-dom";
import Shop from "./components/shop/shop";
import Header from "./pages/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
const Hats = () => {
  return <div>Hats</div>;
};

const Details = () => {
  return <div>Details</div>;
};

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setCurrentUser({ currentUser: userAuth });
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Route exact path="/" component={HomePage} />
        <Route path="/Hats" component={Hats} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Details" component={Details} />
        <Route path="/SignIn" component={SignInAndSignUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
