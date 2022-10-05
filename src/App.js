import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/home/home.component";
import { Navigation } from "./routes/navigation/navigation.component";
import { SignIn } from "./routes/sign-in/sign-in.component";
import { Shop } from "./routes/shop/shop.component"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
