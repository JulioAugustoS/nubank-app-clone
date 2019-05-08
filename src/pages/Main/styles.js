import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const Container = styled.View`
  flex: 1;
  background: #f39c12;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
`;

const Content = styled.View`
  flex: 1;
  max-height: 380px;
  z-index: 5;
`;

const Card = styled(Animated.View)`
  flex: 1;
  background: #FFF;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
`;

const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;

export {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
};
