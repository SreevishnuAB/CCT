import React from 'react';
import { View , Button } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { observer } from 'mobx-react';
import DataStore from '../Store/datastore';
import styles from '../CSS/styles';

@observer
export default class IDScreen extends React.Component{
  
  static navigationOptions = {
		title: 'Student ID',
  };

  constructor(props){
    super(props);
    this.state = {id:undefined};
  }

  _handlePress = () => {
    DataStore.updateStudentID(this.state.id);
    this.props.navigation.navigate('Event');
  }

  render(){
    return(
      <View style={styles.container}>
        <TextField
          tintColor = '#000000'
          baseColor = '#000000'
          labelHeight = {0}
          labelPadding = {5}
          inputContainerStyle = {{backgroundColor:'#ffffff'}}
          label = 'Student ID'
          title = 'Enter Student ID'
          value = {this.state.id}
          onChangeText = {(student) => {this.setState({id:student})}}
          />
        <Button
          title = 'Next'
          color = '#009931'
          onPress = {()=>{console.log(this.state.id);this._handlePress()}}
          />
      </View>
    );
  }
}