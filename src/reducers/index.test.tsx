import {decrementEnthusiasm, incrementEnthusiasm} from "../actions/index";
import {enthusiasm} from "./index";

it('should increment enthusiasm', () => {
    const updatedState = enthusiasm({languageName: '', enthusiasmLevel: 0}, incrementEnthusiasm() );
    expect(updatedState.enthusiasmLevel).toEqual(1);
});

it('should decrement enthusiasm', () => {
    const updatedState = enthusiasm({languageName: '', enthusiasmLevel: 5}, decrementEnthusiasm() );
    expect(updatedState.enthusiasmLevel).toEqual(4);
});

it('should not decrement below 1', () => {
    const updatedState = enthusiasm({languageName: '', enthusiasmLevel: 1}, decrementEnthusiasm() );
    expect(updatedState.enthusiasmLevel).toEqual(1);
});
