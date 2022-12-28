import {Component} from "react";
import {Outlet, Route, Routes} from "react-router-dom";

export class WebshopComponent extends Component {
    render () {
        return (
            <div>
                <p>This is the webshop component</p>
                <h1>Look how routes work:</h1>
                <Outlet></Outlet>
            </div>
        )
    }
}