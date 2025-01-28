import { useEffect } from "react";

const ModalItem = ({ item }) => {
  useEffect(() => {
    console.log(item);
  }, [item]);

  const total = (item.quantity * item.price).toFixed(2);

  return (
    <>
      <li className="flex items-center justify-between py-2">
        <div className="flex w-full items-center gap-2">
          <img
            className="w-2/12 rounded-lg object-contain md:w-2/12"
            src={item.thumbnail}
          />
          <div className="flex flex-col py-1">
            <span className="font-semibold text-roseC-900 ~sm/xl:~text-sm/base">
              {item.name}
            </span>
            <div className="flex gap-4">
              <span className="font-semibold text-redC ~sm/xl:~text-sm/base">
                {item.quantity}x
              </span>
              <span className="text-roseC-500 ~sm/xl:~text-sm/base">
                @ ${item.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="font-semibold text-roseC-900 ~sm/xl:~text-base/lg">
            ${total}
          </span>
        </div>
        <span className="font-medium text-roseC-900"></span>
      </li>
    </>
  );
};

export default ModalItem;
