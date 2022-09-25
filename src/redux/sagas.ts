import { all } from 'redux-saga/effects';
import userSagas from './User/sagas';

function* rootSaga() {
  yield all([
    userSagas(),
  ]);
}

export default rootSaga;
