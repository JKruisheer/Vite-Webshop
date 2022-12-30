import {FC} from "react";

const ShoppingBasket : FC<any> = (props) => {

    return (
        <div>
            <p>This is the shopping basket component</p>
            <p>Number : {props.shoppingNumber}</p>
        </div>
    )
}

export default ShoppingBasket;