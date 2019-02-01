import React from 'react';
import { View , Image , TouchableOpacity , Text} from 'react-native';
import styles from '../CSS/styles';

export default class StudentScreen extends React.Component{

  static navigationOptions = {
		title: 'ID Input',
  };

  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.to}
          onPress={()=>{this.props.navigation.navigate('Barcode')}}>
          <Image
            style={styles.icons}
            source={require('../assets/bcscanner.png')}
          />
          <Text style={styles.text}>
            Scan Barcode
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.to}
          onPress={()=>{this.props.navigation.navigate('ID')}}>
          <Image
            style={styles.icons}
            source={require('../assets/keyboard.png')}
          />
          <Text style={styles.text}>
            Enter ID
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}