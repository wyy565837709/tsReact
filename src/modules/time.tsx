import React from "react";
import { ITimeString } from "../@types/public";

class Time extends React.Component<any, ITimeString> {
    state: ITimeString = {
        time: new Date().toLocaleTimeString(),
    };
    private mTime: any;
    componentDidMount(){
        this.mTime = setInterval(this.myTim.bind(this), 1000)
    }

    myTim() {
        console.log(this.state.time);
        this.setState({time:new Date().toLocaleTimeString()})
    }

    componentWillUnmount() {
        clearInterval(this.mTime);
    }

    render() {
        return (
            <>
                <div>
                    {this.state.time}
                </div>
            </>
        );
    }
}

export default Time;