import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./footer";

// Crea el componente `Home` con los componentes correctamente capitalizados
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Jumbotron />
        <div className="row">
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

