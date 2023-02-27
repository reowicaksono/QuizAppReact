import React, {useState,useEffect} from "react";
import { SafeAreaView, Text, TouchableOpacity, TouchableHighlight, View} from "react-native";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getQuestionByIdQuestionServices, getQuizByIdServices } from "../services/QuizServices";
   
const pQuiz = ({navigation, route}) => {
    const [idQuiz, setIdQuiz] = useState(route.params.id);
    const [questions, setQuestions] = useState('');
    const [title, setTitle] = useState('');

    const arrChange = Array => {
        for (let i = Array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
           
            let temp = Array[i];
            Array[i] = Array[j];
            Array[j] = temp;
        }
        return Array;
    }

    const getDetailsQuiz = async() => {
        let currentQuiz = await getQuizByIdServices(idQuiz);
        currentQuiz = currentQuiz.data();
        setTitle(currentQuiz.title);
        
        const questions = getQuestionByIdQuestionServices(currentQuiz.id);

        let arrQuestion = [];
       (await questions).forEach(async (doc) => {
        let question = doc.data();

        question.allOptions = arrChange([
            ...question.incorrect_asnwers,
            question.correct_answer,
        ]);
       });

       setQuestions([...arrQuestion]);

    };
    useEffect(() => {
        getDetailsQuiz();
    }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* Headers */} 
        <View>
            <Text>{idQuiz}</Text>
        </View>
    </SafeAreaView>
  )
}

export default pQuiz


// Style
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    position: 'relative',
    paddingHorizontal: 24,
  },
});