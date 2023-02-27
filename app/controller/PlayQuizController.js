import React, {useEffect, useState} from "react";
import { getQuestionByIdQuestionServices} from "../services/QuizServices";

export default function PlayQuizController  () {
    const [getQuestionId, setGetQuestionId] = useState('');

    const getAllQuestioIdn = async() => {
        setRefreshing(true);
        const data = await getQuestionByIdQuestionServices();
        //get data question
        let arrQuestion = [];
        data.forEach(async (doc) => {
            let question = doc.data();
            arrQuestion.push(question);
        });
        setGetQuestionId(arrQuestion);
        console.log(getQuestionId);

    };
    useEffect(() => {
        getAllQuestioIdn();
    });

    
    return {
        getQuestionId,
        setGetQuestionId,
        getAllQuestioIdn
        
    }

};

