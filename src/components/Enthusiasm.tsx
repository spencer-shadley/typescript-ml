import * as React from 'react'

import '../style/Enthusiasm.css'

export interface IEnthusiasmProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

interface IEnthusiasmState {
    currentEnthusiasm: number;
}

class Enthusiasm extends React.Component<IEnthusiasmProps, IEnthusiasmState> {
    constructor(props: IEnthusiasmProps) {
        super(props);
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }

    public render() {
        const { name } = this.props;

        if(this.state.currentEnthusiasm <= 0) {
            throw new Error('Whomp whomp...');
        }
        return (
            <div className="enthusiasm">
                <h1 className="greeting">
                    Enthusiasm {name + getExclamationMarks(this.props.enthusiasmLevel || 1)}
                </h1>
                <button onClick={this.props.onDecrement}>-</button>
                <button onClick={this.props.onIncrement}>+</button>
            </div>
        );
    }
}

export default Enthusiasm;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}