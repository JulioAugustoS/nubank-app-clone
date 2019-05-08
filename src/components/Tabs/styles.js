import { Animated } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  constentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.20);
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  justify-content: space-between;
`;

const TabText = styled.Text`
  font-size: 13px;
  color: #FFF;
`;

export {
  Container,
  TabsContainer,
  TabItem,
  TabText,
};
