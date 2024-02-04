import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import fakeData from "../shared/fakeData.json";
import React, { useState } from "react";

const Router = () => {
  const players = [
    {
      id: 1,
      name: "Kiin",
    },
    {
      id: 2,
      name: "Canyon",
    },
    {
      id: 3,
      name: "Chovy",
    },
    {
      id: 4,
      name: "Peyz",
    },
    {
      id: 5,
      name: "Lehends",
    },
  ];
  const [letterValue, setLetterValue] = useState(fakeData);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              players={players}
              letterValue={letterValue}
              setLetterValue={setLetterValue}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
