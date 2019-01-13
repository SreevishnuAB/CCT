import React from 'react';
import { View , Slider , Button , Text } from 'react-native';
import styles from '../CSS/styles';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class CreditScreen extends React.Component{

  static navigationOptions = {
		title: 'Credits',
  };

  constructor(props){
    super(props);
    this.state = {credits:1};
  }

  render(){
    return(
      <View style={styles.container}>
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
       <Button
          title = 'Next'
          color = '#009931'
          onPress = {()=>{this.props.navigation.navigate('Review')}}
          />
    </View>
    );
  }
}