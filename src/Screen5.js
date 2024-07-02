import { View, Text, TextInput, Button } from 'react-native';
import React, { useContext } from 'react';
import {CommonStyles} from '../src/Utils/CommonStyles';
import { Context2 } from '../App';


 function Screen5({navigation}) {
  const context = useContext(Context2)
  return (
    <View style={CommonStyles.contianer}>
        <Text>Enter your PNR</Text>
        <TextInput style={CommonStyles.textField}
            placeholder={'PNR Number'} value={context.pnrNumber}
            onChangeText={(pnr) => {
                context.setPNRNumber(pnr)
            }} />
        <Button title={'NEXT'} onPress={() => {
            navigation.navigate('Screen 6')
        }} />
    </View>
);
}

export default Screen5;