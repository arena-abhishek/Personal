import React from "react";
import "./App.css";
import Card from "./components/card"; 

function App() {
  let myObj = {
    username: "Hitesh Choudhary",
    age: 25,
    country: "India",
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card username={myObj.username} btntxt="Click Me" />
      <Card username={myObj.username} />
    </>
  );
}

export default App;
