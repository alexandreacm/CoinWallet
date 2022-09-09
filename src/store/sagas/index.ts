import { all } from 'redux-saga/effects';
import coinSaga from '../sagas/CoinSaga';

export default function* rootSaga() {
  yield all([coinSaga()]);
}
