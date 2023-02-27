import firebase from "firebase/compat/app"
import { firebaseConfig } from "../utils/FirebaseConfig";
import { ToastAndroid } from 'react-native';

const db = firebase.firestore();
const user = firebase.auth().currentUser;


export const createQuizServices = (title, description, idcurrent) => {
    const data = db.collection('quizzes').doc(idcurrent).set({
        title,
        description,
    })
    console.log(data);
};

export const createQuestionServices = (idcurrent, idQuestion, question) => {
    const data = db.collection('quizzes').doc(idcurrent).collection('questions').doc(idQuestion).set(question);
    console.log(data);
}

export const getQuestionServices = async () => {
    return await db.collection('quizzes').get();
};

export const getQuizByIdServices = async (id) => {
    return await db.collection('quizzes').doc(id).get();
}

export const getQuestionByIdQuestionServices = async (id) => {
    return await db.collection('quizzes').doc(id).collection('questions').get();
}



    
export const fetchDataFromCollection = async (id) => {
  

      const querySnapshot = await db.collection('quizzes').doc(id).collection('questions').get();
  
      let collectionData = []
  
      querySnapshot.forEach((doc) => {
        
        // Pushing each document returned into our array
        collectionData.push(doc.data());
  
      });
      console.log(collectionData);
    
      // Returning the collections fetched data
      return collectionData;
    }
  