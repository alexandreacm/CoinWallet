import { put, takeLatest, call } from 'redux-saga/effects';
import {
  LOADING_COINS,
  COINS_SUCCESS,
  COINS_FAILURE,
  FINDING_COIN,
  FIND_COINS_SUCCESS,
  FIND_COINS_FAILURE,
} from '../slices/CoinSlice';

function* LoadingCoins() {
  try {
    const response = yield call(fetch, `https://api.coinlore.net/api/tickers/?start=0&limit=50`);

    const { data } = yield response.json();
    // yield call(storage.setLocalCoins, data);

    yield put(COINS_SUCCESS({ listCoinsData: data }));
  } catch (error: any) {
    yield put(COINS_FAILURE({ errorMessage: error.response.data.message }));
  }
}

function* FindingCoin({ payload: { id } }) {
  try {
    const response = yield call(fetch, `https://api.coinlore.net/api/ticker/?id=${id}`);

    const coinData = yield response.json();

    yield put(FIND_COINS_SUCCESS({ coinData }));
  } catch (error: any) {
    yield put(FIND_COINS_FAILURE({ errorMessage: error.response.data.message }));
  }
}

export default function* watcher() {
  yield takeLatest(LOADING_COINS, LoadingCoins);
  yield takeLatest(FINDING_COIN, FindingCoin);
}
