const ModalItem = ({ item }) => {
  return (
    <>
      <li className="flex justify-between">
        <div className="flex">
          <img src={item.thumbnail} />
          <div className="flex flex-col">
            <span>{item}</span>
            <div className="flex">
              <span>{item.quantity}</span>
              <span>{item.price}</span>
            </div>
          </div>
        </div>
        <span className="font-medium text-roseC-900">
          {item.quantity * item.price}
        </span>
      </li>
    </>
  );
};

export default ModalItem;
