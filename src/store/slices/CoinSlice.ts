import { createSlice } from '@reduxjs/toolkit';
import { CoinData } from '@screens/Coins';

type Props = {
  listCoinsData: CoinData[];
  coinData: CoinData;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
};

const initialState: Props = {
  listCoinsData: [],
  coinData: {} as CoinData,
  isLoading: false,
  hasError: false,
  errorMessage: '',
};

const CoinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    LOADING_COINS: state => ({ ...state, isLoading: true }),
    COINS_SUCCESS: (state, { payload: { listCoinsData } }) => ({
      ...state,
      listCoinsData,
      isLoading: false,
      hasError: false,
      errorMessage: '',
    }),
    COINS_FAILURE: (state, { payload: { errorMessage } }) => ({
      ...state,
      listCoinsData: [],
      isLoading: false,
      hasError: true,
      errorMessage,
    }),
    FINDING_COIN: state => ({ ...state, isLoading: true }),
    FIND_COINS_SUCCESS: (state, { payload: { coinData } }) => ({
      ...state,
      coinData,
      isLoading: false,
      hasError: false,
      errorMessage: '',
    }),
    FIND_COINS_FAILURE: (state, { payload: { errorMessage } }) => ({
      ...state,
      listCoinsData: [],
      isLoading: false,
      hasError: true,
      errorMessage,
    }),
  },
});

const { actions, reducer } = CoinSlice;

export const {
  LOADING_COINS,
  COINS_SUCCESS,
  COINS_FAILURE,
  FINDING_COIN,
  FIND_COINS_SUCCESS,
  FIND_COINS_FAILURE,
} = actions;

export default reducer;
