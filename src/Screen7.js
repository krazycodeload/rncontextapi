import { View, Text,TextInput, Button } from 'react-native';
import React, { useContext } from 'react';
import {CommonStyles} from '../src/Utils/CommonStyles';
import { Context2 } from '../App';


function Screen7({navigation}){
  const context = useContext(Context2)
  return (
    <View style={CommonStyles.contianer}>
        <Text>Any more comments?</Text>
        <TextInput style={CommonStyles.textField}
            placeholder={'Comments'} value={context.comments}
            onChangeText={(comments) => {
                context.setComments(comments)
            }} />
        <Button title={'NEXT'} onPress={() => {
            navigation.navigate('Screen 8')
        }} />
    </View>
);
}

export default Screen7