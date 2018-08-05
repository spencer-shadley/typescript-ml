import * as React from 'react'

import '../style/Hello.css'

export interface IHelloProps {
    name: string;
    enthusiasmLevel?: number;
}

interface IHelloState {
    currentEnthusiasm: number;
}

class Hello extends React.Component<IHelloProps, IHelloState> {
    constructor(props: IHelloProps) {
        super(props);
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }

    public render() {
        const { name } = this.props;

        if(this.state.currentEnthusiasm <= 0) {
            throw new Error('Whomp whomp...');
        }
        return (
            <div className="hello">
                <h1 className="greeting">
                    Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
                </h1>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        );
    }

    private onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    private onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    private updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({currentEnthusiasm});
    }
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}