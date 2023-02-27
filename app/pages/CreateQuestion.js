import React, {useState} from "react";
import { Text, ToastAndroid, View, TouchableOpacity} from "react-native";
import * as Clipboard from 'expo-clipboard';
import DropDownPicker from 'react-native-dropdown-picker';

import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { createQuestionServices } from "../services/QuizServices";

import ButtonWidget from "../widgets/ButtonWidget";
import TextfieldWidget from "../widgets/TextfieldWidget";
   
const CreateQuestion = ({navigation, route}) => {

  const copyToClipboard = () => {
    Clipboard.setStringAsync(route.params.id);
  };
  
const [idcurrent, setIdCurrent] = useState(route.params.id);
const [titleQuiz, setTitleQuiz] = useState(route.params.title);
const [question, setQuestion] = useState('');
console.log("data coba "+ route.params.id + "ini data benar");

const[answer, setAnswer] = useState('');
const[option1, setOption1] = useState('');
const[option2, setOption2] = useState('');
const[option3, setOption3] = useState('');
const [value, setValue] = useState(null);

const [open, setOpen] = useState(false);
const [items, setItems] = useState([
  {label: 'A', value: '0'},
  {label: 'B', value: '1'},
  {label: 'C', value: '2'},
  {label: 'D', value: '3'}
]);
console.log("items value "+value);


const onSendQuestion =  async () => {
 
  console.log("items value"+items.value);
  if(question == '' || answer == '' || option1 == '' || option2 == '' || option3 == ''){
    ToastAndroid.show('Data tidak boleh kosong', ToastAndroid.SHORT);
  
  }

  let idQuestion = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  await createQuestionServices(idcurrent,idQuestion,{
    question: question,
    data: {
      answer: [answer,option1, option2, option3],
      opt : ["A", "B", "C", "D"],
    },
    
    indexAnswer : value,

  });
  setAnswer('');
  setQuestion('');
  setOption1('');
  setOption2('');
  setOption3('');
  setValue('');
  ToastAndroid.show('Question berhasil dibuat', ToastAndroid.SHORT);
  
};


  return (
    <KeyboardAvoidingView style={styles.container} >
      <ScrollView style={styles.scrolltipeview}>
        {/* Headers */}
        <View style={styles.viewstyles}>
          <Text style={styles.quizText}>Create Question</Text>
          <Text style={styles.texttitle}>
            {route.params.title}
          </Text>
          <View style={styles.container}>
        
      </View>
      <TouchableOpacity onPress={copyToClipboard}>
          <Text>Click Here Your ID ROOM</Text>
        </TouchableOpacity>
          <TextfieldWidget
            label="Question"
            placeholder="Masukkan Pertanyaan"
            value={question}
            onChangeText={value => setQuestion(value)}
          />

          {/* body */}
          <View style={{marginTop: 30}}>
            <TextfieldWidget
              label="Opsi 1"
              placeholder="Masukkan Opsi 1"
              value={answer}
              onChangeText={value => setAnswer(value)}
            />
            <TextfieldWidget
              label="Opsi 2"
              placeholder="Masukkan Opsi 2"
              value={option1}
              onChangeText={value => setOption1(value)}
            />
            <TextfieldWidget
              label="Opsi 3"
              placeholder="Masukkan Opsi 3"
              value={option2}
              onChangeText={value => setOption2(value)}
            />
            <TextfieldWidget
              label="Opsi 4"
              placeholder="Masukkan Opsi 4"
              value={option3}
              onChangeText={value => setOption3(value)}
            />

          </View>

          {/* Footer */}
          <ButtonWidget
            label="Simpan"
            onPress={onSendQuestion}
          />
          <ButtonWidget
          style={{marginTop: 10}}
            label="Selesai"
            onPress={() => {navigation.navigate('Home')}}
          />
        </View>
      </ScrollView>
      <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                />
    </KeyboardAvoidingView>
  )
}

export default CreateQuestion


// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrolltipeview: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewstyles: {
    padding: 20,
  },
  texttitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  quizText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 32
  },
});