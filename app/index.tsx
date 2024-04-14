import { Text, View, Alert} from 'react-native';
import { Link } from 'expo-router';
import {Image} from 'expo-image';
import { Button } from '@rneui/base';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome5';

const LogoImage = require('../assets/logo.svg');

export default function Page() {
  return (
  <View style={{flex:1, alignItems:'center', justifyContent: 'space-evenly'}}>
   <View style={{paddingTop:40}}>
     <Image source = {LogoImage} contentFit = "contain" style = {{width: 280, height: 400}}/>
   </View>
   <View style={{flexDirection: 'row', justifyContent:'space-evenly', width:320}}>
      <Button title="Log" type="outline" buttonStyle={{borderWidth:2, borderRadius:12}}> 
	        <FontAwesome size={24} name="search" />
      </Button>
      <Button title="Log" type="outline" buttonStyle={{borderWidth:2, borderRadius:12}}> 
 	        <FontAwesome size={24} name="question" />
      </Button>
      <Button
           buttonStyle={{borderWidth:2, borderRadius:24, backgroundColor:'cornflowerblue', color:'white'}}>
        <Link href='/(tabs)' style={{color:'white', fontSize: 20}}> Get Started </Link>
      </Button>
   </View>
  </View>
  );
}
