import minusButton from "./images/icon-decrement-quantity.svg"
import plusButton from "./images/icon-increment-quantity.svg"

const ClickButton = () => {
    return (
        <>
        <div className="flex absolute gap-10 -bottom-4 px-4 py-2 w-fit h-fit justify-between rounded-full bg-redC text-white">
        <button className="rounded-full w-max outline outline-2 outline-roseC-100 flex justify-center items-center"><img src={minusButton} alt="" /></button>
        <span>0</span>
        <button className="rounded-full w-max outline outline-2 outline-roseC-100 flex justify-center items-center"><img src={plusButton} alt="" /></button>
        </div>
        </>
    )
}

export default ClickButton