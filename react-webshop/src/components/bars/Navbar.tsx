import ShoppingBasket from "./basket/ShoppingBasket";
import {FC} from "react";

const Navbar : FC<any> = ({shoppingNumber}) => {
    return (
        <div className={"special-navbar"}>
            <p>NAVBAR</p>
            <ShoppingBasket shoppingNumber={shoppingNumber}></ShoppingBasket>
        </div>
    )
}

export default Navbar;