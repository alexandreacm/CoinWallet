import { createSlice } from '@reduxjs/toolkit';

type CoinData = {
  id: string;
  symbol: string;
  name: string;
  rank: number;
  price_usd: number;
  percent_change_24h: number;
};

type Props = {
  coinsData: CoinData[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
};
const initialState: Props = {
  coinsData: [],
  isLoading: false,
  hasError: false,
  errorMessage: '',
};

const CoinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    LOADING_COINS: state => ({ ...state, isLoading: true }),
    COINS_SUCCESS: (state, { payload: { coinsData } }) => ({
      ...state,
      coinsData,
      isLoading: false,
      hasError: false,
      errorMessage: '',
    }),
    COINS_FAILURE: (state, { payload: { errorMessage } }) => ({
      ...state,
      coinsData: [],
      isLoading: false,
      hasError: true,
      errorMessage,
    }),
  },
});

const { actions, reducer } = CoinSlice;

export const { LOADING_COINS, COINS_SUCCESS, COINS_FAILURE } = actions;

export default reducer;