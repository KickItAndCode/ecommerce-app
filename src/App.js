import React, { useEffect, useContext } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Shop from "./components/shop/shop";
import Header from "./pages/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { UserContext } from "./context/userProvider";
import { setCurrentUser } from "./actions/user.actions";

const Hats = () => {
  return <div>Hats</div>;
};

const Details = () => {
  return <div>Details</div>;
};

function App() {
  const { userState, dispatch } = useContext(UserContext);
  // const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef);

        userRef.onSnapshot(snapShot => {
          console.log(snapShot);
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          );
        });
      }
      dispatch(setCurrentUser(userAuth));
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  useEffect(() => {
    console.log(userState);
  }, [userState]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/Shop" component={Shop} />
        <Route
          exact
          path="/SignIn"
          render={() =>
            userState.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
