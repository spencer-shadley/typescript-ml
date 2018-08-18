import * as actions from '../actions';

import Enthusiasm from '../components/Enthusiasm';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IStoreState} from '../types/index';

export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
    return {
        enthusiasmLevel,
        name: languageName
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Enthusiasm);
