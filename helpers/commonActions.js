import * as CommonTypes from './commonTypes';
import { dataStates } from './dataStates';

const CommonActions = {
    [CommonTypes.INIT]: ({ dataState = dataStates.notAsked, params }) => ({ dataState, params }),
    [CommonTypes.LOADING]: ({ dataState = dataStates.loading }) => ({ dataState }),
    [CommonTypes.LOADED]: ({ dataState = dataStates.loaded, data }) => ({ dataState, data }),
    [CommonTypes.FAILED]: ({ dataState = dataStates.failed, err }) => ({ dataState, err }),
};

export default CommonActions;
