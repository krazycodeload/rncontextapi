import { View, Text,TextInput,Button } from 'react-native';
import React, { useContext } from 'react';
import {CommonStyles} from '../src/Utils/CommonStyles';
import { Context2 } from '../App';

function Screen6({navigation}){
  const context = useContext(Context2)
  return (
    <View style={CommonStyles.contianer}>
        <Text>How many bags is the passenger checkign in?</Text>
        <TextInput style={CommonStyles.textField}
            placeholder={'No. of Bags'} value={context.totalBagsChecked}
            onChangeText={(bsgs) => {
                context.setTotalBagsChecked(bsgs)
            }} />
        <Button title={'NEXT'} onPress={() => {
            navigation.navigate('Screen 7')
        }} />
    </View>
);
}

export default Screen6;