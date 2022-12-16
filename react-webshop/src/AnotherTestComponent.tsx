import {Component} from "react";

export class AnotherTestComponent extends Component {
    activeSpecialEffects() {
        console.log("Yo!")
    }


    render (){
        return (
            <div>
                <h1>Hello from another componentsssss</h1>
                <button onClick={this.activeSpecialEffects}>Click me</button>
            </div>
        )
    }
}