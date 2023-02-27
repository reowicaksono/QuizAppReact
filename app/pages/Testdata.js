// import { View, Text } from 'react-native'
// import React from 'react'
// import { fetchDataFromCollection } from '../services/QuizServices'
// import ButtonWidget from '../widgets/ButtonWidget';

// const Testdata = () => {
//     var data = fetchDataFromCollection();
//     const fungsi = () => {
//         console.log(data);
//     }
//   return (
//     <View style ={{marginTop:50}}>
//       <ButtonWidget
//         title="Test"
//         onPress={() => fungsi()}
//         label="Test"
//       />
//     </View>
//   )
// }

// export default Testdata

import { StyleSheet, Text, SafeAreaView, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import questions from "../models/questions";
import PlayQuizController from "../controller/PlayQuizController";
import { firebaseConfig } from '../utils/FirebaseConfig';
import firebase from 'firebase/compat/app';
import { FlatList } from "react-native-gesture-handler";
  
const Testdata = ({navigation,route}) => {
    const db = firebase.firestore();

    const [idcurrent, setIdCurrent] = useState(route.params.id);
    const [testData, settestData] = useState([]);

    useEffect(() => {
      const id  = route.params.id;
     
      db.collection('quizzes').doc(id).collection('questions').get().then(querySnapshot => {
        let collectionData = []
        // querySnapshot.forEach((doc) => {
        //   // Pushing each document returned into our array
        //   collectionData.push(doc.data());
          
        // });
        querySnapshot.forEach((doc) => {
            collectionData.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        settestData(collectionData)
      }).catch((err) => console.log("Error getting documents: " + error));;
           
    }, []);
    const data = questions;
  const totalQuestions = data.length;
  // points
  const [points, setPoints] = useState(0);

  // index of the question
  const [index, setIndex] = useState(0);

  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Counter
  const [counter, setCounter] = useState(15);

  // interval
  let interval = null;

  // progress bar
  const progressPercentage = Math.floor((index/testData.length) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex == currentQuiz?.indexAnswer) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((state) => state - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    // clean up
    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  
  useEffect(() => {
    if (index + 1 > testData.length + 1) {
      clearTimeout(interval)
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];
  // const daadad = testData[index]
  // var aa = dada.map((option, index) => {
  //   return {
  //     id: index,
  //     options: option,
  //     answer: option === daadad?.answer ? true : false
  //   };
  // })
  // // console.log("aa", aa[index].id)
  // console.log("point", answerStatus)
  var currentQuiz = testData[index];

  // console.log("testData", currentQuiz?.indexAnswer);
  
  // console.log("testData", testData[index]?.incorrect_answers);
  

    // for(let i = 0; i < testData.length; i++){
    //     console.log(testData[i]?.question);
    // }
    return (
        <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text>Quiz Challenge</Text>
        <Pressable
          style={{ padding: 10, backgroundColor: "magenta", borderRadius: 20 }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            {counter}
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text>Your Progress</Text>
        <Text>
          ({index}/{testData.length}) questions answered
        </Text>
      </View>

      {/* Progress Bar */}
      <View
          style={{
            backgroundColor: "white",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            height: 10,
            borderRadius: 20,
            justifyContent: "center",
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: "#FFC0CB",
              borderRadius: 12,
              position: "absolute",
              left: 0,
              height: 10,
              right: 0,
              width: `${progressPercentage}%`,
              marginTop: 20,
            }}
          />
        </View>
      <View
        style={{
          marginTop: 30,
          backgroundColor: "#F0F8FF",
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {testData[index]?.question}
        </Text>
        <View style={{ marginTop: 12 }}>
       
        {currentQuiz?.data?.answer.map((item, index) => (
            <Pressable
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              style={
                selectedAnswerIndex === index  &&
                answerStatus === true
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "green",
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      backgroundColor: "red",
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === index &&
            answerStatus === true ? (
              <AntDesign
              style={{
                borderColor: "#00FFFF",
                textAlign: "center",
                borderWidth: 0.5,
                width: 40,
                height: 40,
                borderRadius: 20,
                padding: 10,
              }}
              name="check"
              size={20}
              color="white"
            />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,

                    padding: 10,
                    borderRadius: 20,
                  }}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                </Text>
                
              )}
              <Text style={{ marginLeft: 10 }}>{item}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: "#F0F8FF",
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 17, textAlign: "center", fontWeight: "bold" }
            }
          >
            {!!answerStatus ? "Correct Answer" : "Wrong Answer"}
          </Text>
        )}

        {index + 1 >= testData.length ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Results", {
                points: points,

                answers: answers,
              })
            }
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white" }}>Next Question</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
      );

}
export default Testdata;