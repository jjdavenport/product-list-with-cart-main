import PropTypes from "prop-types";

const ModalItem = ({ item }) => {
  const total = (item.quantity * item.price).toFixed(2);

  return (
    <>
      <li className="flex items-center justify-between border-b border-roseC-100 ~sm/xl:~py-2/4">
        <div className="flex w-full items-center ~sm/xl:~gap-2/4">
          <img
            className="w-2/12 rounded-md object-contain md:w-2/12"
            src={item.thumbnail}
          />
          <div className="flex flex-col py-1">
            <span className="font-medium text-roseC-900 ~sm/xl:~text-sm/lg">
              {item.name}
            </span>
            <div className="flex gap-4">
              <span className="font-medium text-redC ~sm/xl:~text-sm/lg">
                {item.quantity}x
              </span>
              <span className="text-roseC-500 ~sm/xl:~text-sm/lg">
                @ ${item.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="font-medium text-roseC-900 ~sm/xl:~text-base/xl">
            ${total}
          </span>
        </div>
        <span className="font-medium text-roseC-900"></span>
      </li>
    </>
  );
};

ModalItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ModalItem;
