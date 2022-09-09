import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';

import { Coins } from '@screens/Coins';
import { History } from '@screens/History';

const { Navigator, Screen } = createMaterialTopTabNavigator();

import {
  ContainerHeader,
  AvailableBalance,
  AvailableBalanceTitle,
  ContainerVerticalButtons,
  RoundButton,
} from './styles';

export function MaterialTopTab() {
  return (
    <>
      <ContainerHeader>
        <AvailableBalance>$5.430</AvailableBalance>
        <AvailableBalanceTitle>My Wallet</AvailableBalanceTitle>

        <ContainerVerticalButtons>
          <RoundButton>
            <Ionicons name="arrow-up" size={25} color="#FFF" />
          </RoundButton>
          <RoundButton>
            <Ionicons name="arrow-down" size={25} color="#FFF" />
          </RoundButton>
          <RoundButton>
            <Feather name="tag" size={25} color="#FFF" />
          </RoundButton>
          <RoundButton>
            <Entypo name="share" size={25} color="#FFF" />
          </RoundButton>
        </ContainerVerticalButtons>
      </ContainerHeader>

      <Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#FFF',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },
        }}
      >
        <Screen name="BTC" component={Coins} />
        <Screen name="History" component={History} />
      </Navigator>
    </>
  );
}
