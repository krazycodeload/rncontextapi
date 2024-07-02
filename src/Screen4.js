import { View, Text, TextInput, Button } from 'react-native';
import React, { useContext } from 'react';
import {CommonStyles} from '../src/Utils/CommonStyles';
import { Context1 } from '../App';

function Screen4({navigation}) {
  const context = useContext(Context1)
  const {
    fullName,
    destinationCountry,
    departureCountry,
} = context

return (

    <View style={CommonStyles.contianer}>
        <Text style={CommonStyles.title}>Departure country</Text>
        <Text style={CommonStyles.value}>{departureCountry}</Text>
        <Text style={CommonStyles.title}>Destination country</Text>
        <Text style={CommonStyles.value}>{destinationCountry}</Text>
        <Text style={CommonStyles.title}>Passenger Name</Text>
        <Text style={CommonStyles.value}>{fullName}</Text>

        <Text>Is the above info correct?</Text>

        <Button title={'YES'} onPress={() => {
            alert("Yay everything worked well!")
            navigation.popToTop()
        }} />

        <Button title={'NO'} onPress={() => {
            alert("It's okay you can enter the information again")
            navigation.popToTop()
        }} />
    </View>

);
}

export default Screen4;