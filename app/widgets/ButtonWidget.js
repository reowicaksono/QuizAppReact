import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ButtonWidget = (
    {
        label = '',
        onPress = null,
        style={},
        ...more
    }
) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity= {0.8} onPress={onPress} {...more}> 
    <Text style={styles.textstyle}>
      {label}
    </Text>
    
    </TouchableOpacity>
  )
}

export default ButtonWidget

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700' ,
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white' ,
    alignItems: 'center',
  }
});