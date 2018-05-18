import { createActions } from 'redux-actions';
import CommonActions from '../../helpers/commonActions';
import * as Types from './types';

export const { init, loading, loaded, failed } = createActions(CommonActions, { prefix: Types.TRANSACTION });
