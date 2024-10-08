import data from "./assets/data.json";
import Button from "./button-components/button";
import ClickButton from "./button-components/click-button";
import { useMediaQuery } from "react-responsive";

const main = () => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const desktop = useMediaQuery({ minWidth: 1024 });
  return (
    <>
      {data.map((i) => (
        <div className="flex flex-col gap-4" key={i.category}>
          <div className="relative flex flex-col items-center">
            <img
              src={
                desktop
                  ? i.image.desktop
                  : tablet
                    ? i.image.tablet
                    : i.image.mobile
              }
              alt={i.name}
            />
          </div>
          <div className="flex flex-col">
            <span>{i.category}</span>
            <span className="text-2xl">{i.name}</span>
            <span className="text-redC">{`$${i.price.toFixed(2)}`}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default main;
