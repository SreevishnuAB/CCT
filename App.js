import React from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import LoginScreen from './Screens/login';
import EventScreen from './Screens/events';
import BarcodeScanner from './Screens/barcodescanner'
import CreditScreen from './Screens/credits';
import ReviewScreen from './Screens/review';
import IDScreen from './Screens/id';
import StudentScreen from './Screens/student';

const Nav = createStackNavigator({
    Login:LoginScreen,
    InputID:StudentScreen,
    Barcode:BarcodeScanner,
    ID:IDScreen,
    Event:EventScreen,
    Credit:CreditScreen,
    Review:ReviewScreen,
  },{
    initialRouteName:'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3d3d3d',
      },
      headerTintColor: '#ffffff',
    }
  }
);

const Root = createAppContainer(Nav);

export default class App extends React.Component {
  render() {
    return (
/*
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      </View>
*/
      <Root/>
//      <ReviewScreen/>
    );
  }
}
