import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class BarcodeScannere extends React.Component {
  static navigationOptions = {
		title: 'Barcode Scanner',
  };

  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
//    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    DataStore.updateStudentID(data);
    console.log(DataStore.session.studentID);
    this.props.navigation.navigate('Event');
  }
}