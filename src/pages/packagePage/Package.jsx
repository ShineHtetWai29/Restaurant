import React from "react";
import PackageCard from "./PackageCard";
import "./Package.css";
import dish from "../../img/Serving dish.png";
import juice from "../../img/Orange juice.png";
import cake from "../../img/Gelato.png";
import Subscription from "./Subscription";

const Package = () => {
  const packages = [
    {
      id: 1,
      title: "Silver Package",
      bgClass: "bg1",
      maindish: "Maidnish",
      food: dish,
    },
    {
      id: 2,
      title: "Gold Package",
      bgClass: "bg2",
      maindish: "Maidnish",
      drink: "Drink",
      dessert: "Dessert",
      food: dish,
      colddrink: juice,
      des: cake,
    },
    {
      id: 3,
      title: "Diamond Package",
      bgClass: "bg3",
      maindish: "Maidnish",
      drink: "Drink",
      dessert: "Dessert",
      sidedish: "Sidedish",
      food: dish,
      colddrink: juice,
      des: cake,
      sidefood: dish,
    },
  ];
  return (
    <div>
      <div className="packagetitle">
        <h2>Packages</h2>
      </div>
      <div className="packagebody">
        <div className="innerwidth">
          {packages.map((item) => (
            <PackageCard
              title={item.title}
              image={item.bgClass}
              maindish={item.maindish}
              drink={item.drink}
              dessert={item.dessert}
              sidedish={item.sidedish}
              food={item.food}
              colddrink={item.colddrink}
              des={item.des}
              sidefood={item.sidefood}
            />
          ))}
        </div>
      </div>
      <Subscription />
    </div>
  );
};

export default Package;
