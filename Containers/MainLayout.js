// main file
import React, {
   AppRegistry,
   Component,
   StyleSheet,
   Navigator } from 'react-native';

import {Container, Header, Content, Footer, Title} from 'native-base';
import Yaks from './Yaks';
import ComposeYak from '../Components/ComposeYak';

class MainLayout extends Component {
       render() {
           return (
               <Container>
                   <Header>
                       <Title>bison.</Title>
                   </Header>
                   <Content>
                     <Yaks navigator={this.props.navigator} />
                  </Content>

                   <Footer>
                       <Title>this is the footer</Title>
                   </Footer>
               </Container>
           );
       }
   }
module.exports = MainLayout;