import styled, { css } from 'styled-components/native';
import useFontFamily from '@hooks/useFontFamily';

import spacings from '../../theme/spacings';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: ${useFontFamily(400)};
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: spacings.SMALL,
  },
})`
  background-color: #fff;
`;

export const StyledEmptyListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

export const StyledEmptyList = styled.View`
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

export const StyledEmptyListView = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`;

export const StyledEmptyListText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: ${useFontFamily(500)};
`;
