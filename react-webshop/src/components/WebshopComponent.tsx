import {useState} from "react";
import Navbar from "./bars/Navbar";
import Sidebar from "./bars/Sidebar";
import ProductOverview from "./products/ProductOverview";
import Title from "./templates/TemplateComponent";

const WebshopComponent = () => {
    const [number, setNumber] = useState(5);

    const increaseCounter = (value : number) => {
        setNumber(number + value);
    }

    return (
        <div>
            <Navbar shoppingNumber={number}></Navbar>
            <div className={"content-items"}>
                <Sidebar></Sidebar>
                <ProductOverview increaseItemsOrdered={increaseCounter} test={"This is a test item"}></ProductOverview>
            </div>
            {/*<Title title={"test"} subtitle={"test2"} ></Title>*/}
            {/*<p>This is the webshop component</p>*/}
            {/*<h1>Look how routes work:</h1>*/}
            {/*<Outlet></Outlet>*/}
        </div>
    )
}

export default WebshopComponent;