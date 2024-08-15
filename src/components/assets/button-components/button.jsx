import cartIcon from "./images/icon-add-to-cart.svg"

const Button = ({ onClick }) => {
    return (
        <>
        <button onClick={onClick} className="h-fit flex absolute px-4 py-2 -bottom-4 items-center w-fit justify-center gap-2 bg-rose-50 rounded-full hover:outline-1 hover:outline hover:outline-redC"><img src={cartIcon}  alt="" />Add to cart</button>
        </>
    )
}

export default Button 