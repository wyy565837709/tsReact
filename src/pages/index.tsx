import React from "react";

export type IProps = {}

export interface IState {
    loading: boolean;
}

export default class a extends React.Component<IProps, IState> {
    state: IState = {
        loading: true,
    };

    render() {
        return (
           <div>
               
           </div>
        );
    }
}