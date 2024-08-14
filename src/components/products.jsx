import data from "./assets/data.json"
import Button from "./assets/button-components/button"
import ClickButton from "./assets/button-components/click-button"
import { useState } from "react";

const main = () => {
const [button, setButton] = useState([])
const click = (category) => {
  setButton((prev) => [...prev, category]);
}
  return (
    <>
    {data.map((i) => 
    <div className="flex flex-col" key={i.category}>
      <div className="flex flex-col relative items-center">
    <img src={i.image.mobile} alt={i.name} className="rounded-lg"/>
    {button.includes(i.category) ? (
      <ClickButton />
    ) : (
      <Button onClick={() => click(i.category)}/>
    )
  }
    </div>
    <span>{i.category}</span>
    <span>{i.name}</span>
    <span>{`$${i.price}`}</span>
    </div>
    )}
    </>
  )
};

export default main;
