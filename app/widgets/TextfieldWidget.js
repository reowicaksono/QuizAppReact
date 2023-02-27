import { View, Text, TextInput } from 'react-native'
import React from 'react'

const TextfieldWidget = (
  {
    label = '',
    placeholder = '',
    value = null,
    onChangeText = null,
    secureTextEntry = false,
   }
  ) => {
  return (
    <View style = {{width: '100%', marginBottom: 40}}>
      <Text>{label}</Text>
      <TextInput style={{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        padding: 12,
        width: '100%',
      }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      >
        
      
      </TextInput>
    </View>
  )
}


export default TextfieldWidget