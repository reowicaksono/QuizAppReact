import React from "react";
import { Text, ToastAndroid, View} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';


import ButtonWidget from "../widgets/ButtonWidget";
import TextfieldWidget from "../widgets/TextfieldWidget";
import quizController from "../controller/QuizController";
import { createQuizServices } from "../services/QuizServices";
   
const CreateQuiz = ({navigation}) => {

  const {titleQuiz, setTitleQuiz, descriptionQuiz, setdescriptionQuiz, onSubmitQuiz, open, setOpen, items,setItems, value, setValue} = quizController();

  const onSendData = async () => {
  const idcurrent = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  var a = await createQuizServices(titleQuiz, descriptionQuiz, idcurrent);

console.log(a)

navigation.navigate("CreateQuestion",
{
    id: idcurrent,
    title: titleQuiz,
}
)

setTitleQuiz('');
setdescriptionQuiz('');
ToastAndroid.show('Quiz berhasil dibuat', ToastAndroid.SHORT);
    
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Headers */} 
      <Text style={styles.quizText}>Quiz ID</Text>

      {/* Body */}
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
    <View style={{height: 24}} />
      <TextfieldWidget 
        label='Judul Quiz'
        placeholder='Masukkan Judul Quiz'
        value={titleQuiz}
        onChangeText={value => setTitleQuiz(value)}
      />
      <TextfieldWidget 
        label='Deskripsi Quiz'
        placeholder='Masukkan Deskripsi Quiz'
        value={descriptionQuiz}
        onChangeText={value => setdescriptionQuiz(value)}
      />
      <ButtonWidget
        label="Create Quiz"
        onPress={onSendData}
      />
      <View style={{height: 24}} />
      {/* test sample data */}
      <ButtonWidget 
        label="Test"
        onPress={() => {
          navigation.navigate("CreateQuestion",
          {
              id: '80yoyxhyibbwhxwgw45g',
              title: 'ini data',
          }
          )
        }}
      />

      {/* Footers */}

    </SafeAreaView>
  )
}

export default CreateQuiz


// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
  },
  quizText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 32
  },
});