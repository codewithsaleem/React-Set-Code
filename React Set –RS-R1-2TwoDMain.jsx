import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ShowTable from "./React Set –RS-R1-2TwoDArray";
class MainComponent extends Component {
    state = {
        arry2D: [
            [2, 3, 4, 6, 7],
            [3, 4, 5],
            [5, 10],
            [14],
            [4, 8, 12, 16]
        ],
    }


    handleInc = () => {
        let { arry2D } = this.state;
        let newArry2D = arry2D.map((innerArray) => innerArray.map((ele) => ele + 1));
        this.setState({ arry2D: newArry2D });
    }

    handleDec = () => {
        let { arry2D } = this.state;
        let newArry2D = arry2D.map((innerArray) => innerArray.map((ele) => ele - 1));
        this.setState({ arry2D: newArry2D });
    }

    handleInsert0 = () => {
        let { arry2D } = this.state;
        let newArry2D = arry2D.map((innerArray) => [0, ...innerArray]);
        this.setState({ arry2D: newArry2D });
    }

    handleInsert22 = () => {
        let { arry2D } = this.state;
        let newArry2D = arry2D.map((innerArray) => [...innerArray, 22]);
        this.setState({ arry2D: newArry2D });
    }

    remove4less = () => {
        let { arry2D } = this.state;
        let newArry2D = arry2D.map((innerArray) => innerArray.filter((ele) => ele > 4));
        this.setState({ arry2D: newArry2D });
    }

    handleDouble = (value) => {
        let { arry2D } = this.state;
        let newArry2D = arry2D.map((innerArray) => innerArray.map((ele) => (ele === value ? ele * ele : ele)));
        this.setState({ arry2D: newArry2D });
    }    

    render() {
        let { arry2D } = this.state;
        console.log("2D", arry2D)

        return (
            <div className="container">
                <Switch>
                    <Route
                        path="/arry2D"
                        render={(props) => <ShowTable {...props}
                            arry2D={arry2D}
                            onIncrement={this.handleInc}
                            onDecrement={this.handleDec}
                            onInsert0={this.handleInsert0}
                            onInsert22={this.handleInsert22}
                            onRemove4less={this.remove4less}
                            onDouble={this.handleDouble}
                        />}
                    />

                    <Redirect from="" to="/arry2D" />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;