import minusButton from "./assets/images/icon-decrement-quantity.svg"
import plusButton from "./assets/images/icon-increment-quantity.svg"

const ClickButton = () => {
    return (
        <>
        <section className="flex items-center justify-evenly h-10 rounded-full bg-redC text-white">
        <button className="rounded-full outline outline-2 outline-roseC-100 h-4 w-4 flex justify-center items-center"><img src={minusButton} alt="" /></button>
        <span></span>
        <button className="rounded-full outline outline-2 outline-roseC-100 h-4 w-4 flex justify-center items-center"><img src={plusButton} alt="" /></button>
        </section>
        </>
    )
}

export default ClickButton