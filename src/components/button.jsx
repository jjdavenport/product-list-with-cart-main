import cartIcon from "./assets/images/icon-add-to-cart.svg"

const Button = () => {
    return (
        <>
        <button className="h-10 flex items-center justify-center gap-2 bg-rose-50 rounded-full hover:border hover:border-redC"><img src={cartIcon}  alt="" />Add to cart</button>
        </>
    )
}

export default Button 