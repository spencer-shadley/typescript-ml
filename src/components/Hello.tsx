import * as React from 'react'

export interface IHelloProps {
    name: string;
    enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: IHelloProps) {
    if (enthusiasmLevel <= 0) {
        throw new Error('Whomp whomp...')
    }

    return (
        <div className="hello">
            <h1 className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </h1>
        </div>
    );
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}