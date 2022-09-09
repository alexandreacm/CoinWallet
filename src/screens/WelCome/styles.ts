import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/animateColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  containerLogo: {
    flex: 2,
    backgroundColor: COLORS.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: COLORS.FORM,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.SUB_TITLE,
  },
  button: {
    width: '60%',
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderRadius: 50,
    paddingVertical: 8,
    bottom: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.FORM,
  },
});

// export const Container = styled.View`
//   flex: 1;
//   background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
// `;

// export const ContainerLogo = styled.View`
//   flex: 2;
//   background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
//   justify-content: center;
//   align-items: center;
// `;

// export const ContainerForm = styled.View`
//   flex: 1;
//   background-color: ${({ theme }) => theme.COLORS.FORM};
//   border-top-left-radius: 25px;
//   border-top-right-radius: 25px;
//   padding-left: 5%;
//   padding-right: 5%;
// `;

// export const Title = styled.Text`
//   font-size: 24px;
//   font-weight: bold;
//   margin-top: 28px;
//   margin-bottom: 12px;
// `;

// export const SubTitle = styled.Text`
//   font-size: 16px;
//   color: ${({ theme }) => theme.COLORS.SUB_TITLE};
// `;

// export const Button = styled.TouchableOpacity`
//   width: 60%;
//   position: absolute;
//   align-self: center;
//   background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
//   border-radius: 50px;
//   padding-top: 8px;
//   bottom: 15%;
//   justify-content: center;
//   align-items: center;
// `;

// export const ButtonText = styled.Text`
//   font-size: 18px;
//   font-weight: bold;
//   text-align: center;
//   color: ${({ theme }) => theme.COLORS.FORM};
// `;
