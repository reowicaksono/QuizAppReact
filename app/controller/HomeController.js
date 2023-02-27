import React, {useEffect, useState} from "react";
import { getQuestionServices } from "../services/QuizServices";

export default function HomeController  () {
    const [getQuestion, setGetQuestion] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    const getAllQuestion = async() => {
        setRefreshing(true);
        const data = await getQuestionServices();
        let arrQuestion = [];

        //if null
        if (data == null) {
            return;
        }else{
            data.forEach((doc) => {
                arrQuestion.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
        }

        setGetQuestion(arrQuestion);
        
        setRefreshing(false);
    };
    useEffect(() => {
        getAllQuestion();
    });

    
    return {
        getQuestion,
        setGetQuestion,
        refreshing,
        setRefreshing,
        getAllQuestion,
    }

};

