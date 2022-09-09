import styled, { css } from 'styled-components/native';
import useFontFamily from '@hooks/useFontFamily';

export const ContainerHeader = styled.View`
  width: 100%;
  height: 266px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const ContainerBody = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.FORM};
  justify-content: center;
  align-items: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: -25px;
`;

export const AvailableBalance = styled.Text`
  font-size: 35px;
  color: #fff;
  text-align: center;
  font-family: ${useFontFamily(700)};
`;

export const AvailableBalanceTitle = styled.Text`
  font-size: 16px;
  color: #f3f3f3;
  text-align: center;
  font-family: ${useFontFamily(400)};
`;

export const ContainerVerticalButtons = styled.View`
  width: 100%;
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const RoundButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgba(135, 206, 250, 0.5);
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;
