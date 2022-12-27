import {Component} from "react";
import {DivStyles} from "../styles/DivStyles";
import {Outlet, Route, Routes} from "react-router-dom";
import {WelcomeComponent} from "./WelcomeComponent";
import {IndexComponent} from "./IndexComponent";
import {UnknownPathComponent} from "./UnknownPathComponent";
import TemplateComponent from "./templates/TemplateComponent";

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