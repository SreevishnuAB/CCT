import React from 'react';
import { observer } from 'mobx-react';
import { View , Button , ScrollView , Slider , Text , Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {TextField} from 'react-native-material-textfield';
import DataStore from '../Store/datastore';
import styles from '../CSS/styles';
import axios from 'axios';

@observer
export default class ReviewScreen extends React.Component{

  static navigationOptions = {
		title: 'Review',
  };

  constructor(props){
    super(props);
    this.state = { ID:DataStore.session.studentID, event:DataStore.session.event, credits:DataStore.session.credits, user:DataStore.session.user};
  }

  _handleContinue = () => {
    this.props.navigation.navigate('InputID');
  }

  _handleLogout = () => {
    /*TODO -- Session invalidate*/
    var self = this;
		axios.get("https://c-c-t.herokuapp.com/php/logout.php")
		.then(function(response){
      alert("Logged out successfully");
      self.props.navigation.navigate('Login');
		})
		.catch(function(error){
			alert(error);
		});
  }

  _handleSubmit = async() => {
    DataStore.updateCredits(this.state.credits)
    DataStore.updateEvent(this.state.event);
    var self = this;
		axios.post("https://c-c-t.herokuapp.com/php/adddata.php",
		{
			user:DataStore.session.user,
      id:DataStore.session.studentID,
      credits:DataStore.session.credits,
      event:DataStore.session.event,
		})
		.then(await function(response){
//      alert(response.data.status);
      Alert.alert(
        response.data.status,
        "Scan another ID?",
        [
          {text:"Yes",onPress: ()=>{self._handleContinue()}},
          {text:"Logout",onPress: ()=>{self._handleLogout()}}
        ]
      );
  
			})
		.catch(function(error){
			alert(error);
		});
  }

  render(){
    return(
      <View style={styles.scrollViewContainer}>
        <ScrollView 
          style={{flex:1,backgroundColor: '#000000',}}
          keyboardDismissMode='on-drag'>
          <TextField
            tintColor = '#000000'
            baseColor = '#000000'
            labelHeight = {15}
            labelPadding = {5}
            inputContainerStyle = {{backgroundColor:'#ffffff'}}
            label = 'Username'
            value = {this.state.user}
            editable = {false}
            />
          <TextField
            tintColor = '#000000'
            baseColor = '#000000'
            labelHeight = {15}
            labelPadding = {5}
            inputContainerStyle = {{backgroundColor:'#ffffff'}}
            label = 'Student ID'
            value = {this.state.ID}
            editable = {false}
            />
          <Text style={styles.text}>Event:</Text>
          <RNPickerSelect
            style = {{...styles}}
            placeholder = {{label:'Select an event',value:''}}
            items = {DataStore.events}
            value = {this.state.event}
            onValueChange = {(value) => {this.setState({event:value})}}
            />
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.slider}
                maximumValue={10}
                minimumValue={1}
                onValueChange={(value)=>this.setState({credits:value})}
                onSlidingComplete={()=>{DataStore.updateCredits(this.state.credits)}}
                step={1}
                value={this.state.credits}
                thumbTintColor='#f44336'
                maximumTrackTintColor='#ffffff'
                />
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
                <Text style={styles.text}>1</Text>
                <Text style={styles.text}>Credits: {this.state.credits}</Text>
                <Text style={styles.text}>10</Text>
              </View>
          </View>
        </ScrollView>
        <View style={{flex:0.1,backgroundColor:'#000000'}}>
          <Button
            title = 'Submit'
            color = '#009931'
            onPress = {()=>{this._handleSubmit()}}
          />
        </View>
      </View>
    );
  }
}