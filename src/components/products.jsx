import data from "./assets/data.json"
import Button from "./assets/button-components/button"
import ClickButton from "./assets/button-components/click-button"
import { useState } from "react";
import { useMediaQuery } from "react-responsive"

const main = () => {
const [button, setButton] = useState([])
const click = (category) => {
  setButton((prev) => [...prev, category]);
}
const tablet = useMediaQuery({ minWidth: 768 });
const desktop = useMediaQuery({ minWidth: 1024 });
  return (
    <>
    {data.map((i) => 
    <div className="flex flex-col gap-4" key={i.category}>
      <div className="flex flex-col relative items-center">
    <img src={desktop ?  i.image.desktop : tablet ? i.image.tablet : i.image.mobile} alt={i.name} className={`${button.includes(i.category) ? "outline-redC outline outline-2" : "outline-none"} rounded-lg`}/>
    {button.includes(i.category) ? (
      <ClickButton />
    ) : (
      <Button onClick={() => click(i.category)}/>
    )
  }
    </div>
    <div className="flex flex-col">
    <span>{i.category}</span>
    <span className="text-2xl">{i.name}</span>
    <span className="text-redC">{`$${i.price.toFixed(2)}`}</span>
    </div>
    </div>
    )}
    </>
  )
};

export default main;
