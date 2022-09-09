import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '@store/sagas';
import reducers from '@store/slices';

function createStore() {
  const sagaMiddleware = createSagaMiddleware();

  const returnStore = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);
  return returnStore;
}

const store = createStore();

export default store;
