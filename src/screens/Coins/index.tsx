import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LOADING_COINS } from '@store/slices/CoinSlice';

import {
  Container,
  FlatList,
  StyledEmptyList,
  StyledEmptyListView,
  StyledEmptyListText,
} from './styles';

import Lottie from 'lottie-react-native';
import Loading from '@components/Loading';

import empty from '@assets/animations/empty-list';
import icDefault from '@assets/icons/default.png';

export function Coins() {
  const dispatch = useDispatch();
  const { isLoading, coinsData, hasError, errorMessage } = useSelector(({ coins }) => coins);

  function renderEmptyList() {
    if (isLoading && !coinsData.length) return;

    return (
      <>
        <StyledEmptyList>
          <Lottie source={empty} loop autoPlay resizeMode="contain" />
          <StyledEmptyListView>
            <StyledEmptyListText>There is no data!</StyledEmptyListText>
          </StyledEmptyListView>
        </StyledEmptyList>
      </>
    );
  }

  function renderItem({ item }) {}

  useEffect(() => {
    dispatch(LOADING_COINS());
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledFlatList
          data={coinsData}
          ListEmptyComponent={renderEmptyList}
          renderItem={renderItem}
        />
      )}
    </Container>
  );
}
