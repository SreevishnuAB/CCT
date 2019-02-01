import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001215',
//    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:hp('7.50%'),
    padding:wp('5%'),
  },
  loginBox: {
    backgroundColor:'#008aad',
    height:hp('40%'),
    width:wp('90%'),
    padding:wp('5%'),
    justifyContent:'space-evenly',
    borderRadius:5,
    elevation:5,
    marginBottom:20,
  },
  text: {
    color:'#ffffff',
  },
  inputAndroid: {
    color:'#000000',
  },
  viewContainer: {
    backgroundColor:'#ffffff',
    marginBottom:wp('5%'),
  },
  sliderContainer: {
    borderWidth:2,
    borderColor:'#00e3ff',
    borderRadius:5,
    marginBottom:wp('5%'),
  },
  slider: {
    padding:wp('5%'),
    height:hp('25%'),
  },
  scrollViewContainer: {
    justifyContent: 'space-between',
    flex:1,
    backgroundColor: '#000000',
    paddingTop:hp('7.50%'),
    padding:wp('5%'),
  },
  icons: {
    width:wp('50%'),
    height:wp('50%')
  },
  iconContainer: {
      flex: 1,
      backgroundColor: '#001215',
      alignItems: 'center',
      justifyContent:'space-evenly',
      padding:wp('5%'),
    },
    to: {
      padding:wp('2%'),
      borderRadius:5,
      backgroundColor:'#0a6a7a',
      alignItems:'center',
      justifyContent:'center'
    }
});

export default styles;