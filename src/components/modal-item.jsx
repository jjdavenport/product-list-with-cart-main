const ModalItem = ({ thumbnail, price, item, quantity }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <img src={thumbnail} />
          <div className="flex flex-col">
            <span>{item}</span>
            <div className="flex">
              <span>{quantity}</span>
              <span>@ {price}</span>
            </div>
          </div>
        </div>
        <span>{quantity * price}</span>
      </div>
    </>
  );
};

export default ModalItem;
