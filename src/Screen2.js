import { View, Text, TextInput,Button } from 'react-native';
import React, { useContext } from 'react';
import {CommonStyles} from '../src/Utils/CommonStyles';
import { Context1 } from '../App';

function Screen2({navigation}) {
  const context = useContext(Context1)

  return (
    <View style={CommonStyles.contianer}>
            <Text>Enter your destination country</Text>
            <TextInput style={CommonStyles.textField}
                placeholder={'Destination Country'} value={context.destinationCountry}
                onChangeText={(dest) => {
                    context.setDestinationCountry(dest)
                }} />
            <Button title={'NEXT'} onPress={() => {
                navigation.navigate('Screen 3')
            }} />
        </View>
  )
}

export default Screen2;