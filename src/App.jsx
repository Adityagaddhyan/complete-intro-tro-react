import React from "react";
import ReactDOM from "react-dom/client";
import SearchParams from "./searchParams";

const App = () => {
  const animals = [
    { name: "Luna", animal: "Dog", breed: "Havanese" },
    { name: "Pepper", animal: "Bird", breed: "Cockatiel" },
  ];
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
