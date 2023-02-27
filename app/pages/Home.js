import React, {useState,useEffect} from "react";
import { SafeAreaView, Text, TouchableOpacity, TouchableHighlight, View} from "react-native";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import HomeController from "../controller/HomeController";
import { getQuestionServices } from "../services/QuizServices";
import firebase from "firebase/compat/app";
import ButtonWidget from "../widgets/ButtonWidget";
   
const Home = ({navigation}) => {
const {getQuestion,setGetQuestion,refreshing,setRefreshing,getAllQuestion} = HomeController();

  return (
    <SafeAreaView style={styles.container}>
      {/* Headers */} 

      <Text style={styles.loginText}>Home</Text>

      {/* Body */}

      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({highlighted}) => (
            <View style={[style.separator, highlighted && {marginLeft: 0}]} />
          ))
        }
        onRefresh={getAllQuestion}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
        style={{paddingVertical: 24}}
        data={[{getQuestion}]}
        renderItem={({item,index}) => {
          //if null
          // console.log(item.getQuestion)
          if (item.getQuestion.length != 0) {
            // console.log(item.getQuestion[index])
            return (
              <TouchableHighlight
                underlayColor="#DDDDDD">
                <View style={styles.databuilder}>
                  <View style={styles.datainbuilder}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      {item.getQuestion[index].title}
                    </Text>
                    <Text style={{fontSize: 14, color: 'gray'}}>
                      {item.getQuestion[index].description}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.tnOpacity} onPress={() => 
                   navigation.navigate("Testdata",
                    {
                        id: item.getQuestion[index].id,
                    }
                  )}>
                    <Text style={{color: 'white'}}>Join</Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
            )
          } else {
            return (
              <View style={styles.databuilder}>
                <Text style={styles.text}>No Data</Text>
              </View>
            );
          }
        }}
      

      />

      {/* Footers */}
      
      <View style={{marginBottom: 24, }}>
      <ButtonWidget
        label="Create Quiz"
        style={styles.buttonQuiz}
        onPress={() => navigation.navigate('CreateQuiz')}
      />
      </View>


    </SafeAreaView>
  )
}

export default Home


// Style
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    position: 'relative',
    paddingHorizontal: 16,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 32
  },
  foot: {
    flexDirection: 'row', 
    marginTop: 20, 
    alignItems: 'center'
  },
  footText: {
    color: '#FFC700', 
    fontWeight: 'bold',
     marginLeft: 8
  },
  databuilder: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    elevation: 2,
  },
  datainbuilder: {
    flex: 1,
    paddingRight : 10,
  },
  tnOpacity: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: '#FFC700',
  },
  buttonQuiz: {
    position: 'absolute',
    borderRadius: 30,
    paddingHorizontal: 30,
  }
});