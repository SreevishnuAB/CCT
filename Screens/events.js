import React from 'react';
import { View , Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from '../CSS/styles';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class EventScreen extends React.Component{
  
  static navigationOptions = {
		title: 'Event',
  };

  constructor(props){
    super(props);
    this.state = {event:''};
  }
  
  _handlePress = () => {
    DataStore.updateEvent(this.state.event);
    this.props.navigation.navigate('Credit');
  }

  render(){
    const events = [{label:'Sports', value:'Sports'},{label:'Arts',value:'Arts'}];
    return(
      <View style={styles.container}>
        <RNPickerSelect
          style = {{...styles}}
          placeholder = {{label:'Select an event',value:''}}
          items = {DataStore.events}
          value = {this.state.event}
          onValueChange = {(value) => {this.setState({event:value})}}
          />
        <Button
          title = 'Next'
          color = '#009931'
          onPress = {()=>{console.log(this.state.event);this._handlePress()}}
          />
      </View>
    );
  }

}