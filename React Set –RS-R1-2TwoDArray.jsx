import React, { Component } from "react";

class ShowTable extends Component {
    handleIncrement = () => {
        this.props.onIncrement();
    }
    handleDecrement = () => {
        this.props.onDecrement();
    }
    handleInsert0atstart = () => {
        this.props.onInsert0();
    }
    handleIsert22atend = () => {
        this.props.onInsert22();
    }
    handleRemove4less = () => {
        this.props.onRemove4less();
    }
    handleDouble = (element) => {
        this.props.onDouble(element);
    }
    render() {
        let { arry2D } = this.props;

        return (
            <div className="container mt-4">
                {arry2D.map((subArray, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        {subArray.map((element, colIndex) => (
                            <React.Fragment> <button className="btn btn-sm btn-warning m-1 pr-4" onClick={() => this.handleDouble(element)}>{element}</button></React.Fragment>
                        ))}
                        <br />
                    </React.Fragment>
                ))}

                <button className="btn btn-sm btn-primary m-1" onClick={() => this.handleIncrement()}>+1</button>
                <button className="btn btn-sm btn-primary m-1" onClick={() => this.handleDecrement()}>-1</button>

                <button className="btn btn-sm btn-primary m-1" onClick={() => this.handleIsert22atend()}>Insert 22 at End</button>
                <button className="btn btn-sm btn-primary m-1" onClick={() => this.handleInsert0atstart()}>Insert 0 at Start</button>

                <button className="btn btn-sm btn-primary m-1" onClick={() => this.handleRemove4less()}>Remove 4 or less</button>

                <h2>Stats for each row</h2>
                {arry2D.map((subArray, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        Sum: {subArray.reduce((acc, curr) => (acc + curr), 0)} ,
        
                        Count: {subArray.length} ,
                    
                        Max: {subArray.reduce((acc, curr) => Math.max(acc, curr), subArray[0])} ,
                        
                        Min: {subArray.reduce((acc, curr) => Math.min(acc, curr), subArray[0])}
                        <br />
                    </React.Fragment>
                ))}
            </div>
        )
    }
}
export default ShowTable;