import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LOADING_COINS } from '@store/slices/CoinSlice';

import {
  Container,
  StyledEmptyList,
  StyledEmptyListView,
  StyledEmptyListText,
  FlatList,
  ViewIcon,
  LeftSide,
  RightSide,
  ImgIcon,
  CardContainer,
  Name,
  Price,
  PriceUsd,
  RightSideViewHeader,
  RightSideViewBottom,
  PercentChange24h,
} from './styles';

import Lottie from 'lottie-react-native';
import Loading from '@components/Loading';

import empty from '@assets/animations/empty-list';
import icDefault from '@assets/icons/default.png';
import { coinImage, formatMoney } from '@helpers/functions/utils/';
import { useAuthContext } from '@contexts/AuthProvider';

export type CoinData = {
  id: string;
  symbol: string;
  name: string;
  rank: number;
  price_usd: number;
  price_btc: number;
  percent_change_24h: number;
};

export function Coins() {
  const dispatch = useDispatch();
  const { isLoading, coinsData } = useSelector(({ coins }) => coins);

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

  function renderItem({ item }: CoinData) {
    return (
      <CardContainer activeOpacity={0.8}>
        <LeftSide>
          <ViewIcon>
            <ImgIcon source={coinImage[item?.symbol] || icDefault} resizeMode="contain" />
          </ViewIcon>
        </LeftSide>
        <RightSide>
          <RightSideViewHeader>
            <Name>{item.name}</Name>
            <Price>
              {formatMoney(parseFloat(item?.price_btc))} - {item?.symbol}
            </Price>
          </RightSideViewHeader>
          <RightSideViewBottom>
            <PriceUsd>{formatMoney(parseFloat(item?.price_usd))}</PriceUsd>
            <PercentChange24h>{item?.percent_change_24h}%</PercentChange24h>
          </RightSideViewBottom>
        </RightSide>
      </CardContainer>
    );
  }

  useEffect(() => {
    dispatch(LOADING_COINS());
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={coinsData}
          keyExtractor={(item: any) => item.id}
          ListEmptyComponent={renderEmptyList}
          renderItem={renderItem}
        />
      )}
    </Container>
  );
}
