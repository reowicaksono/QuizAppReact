import React, {useState} from "react";

export default function quizController  () {
    const [titleQuiz, setTitleQuiz] = useState('');
    const [descriptionQuiz, setdescriptionQuiz] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Bahasa', value: 'Bahasa'},
      {label: 'Matematika', value: 'Matematika'}
    ]);
    
    const onSubmitQuiz = () => {

    };
    
    return {
        titleQuiz,
        setTitleQuiz,
        descriptionQuiz,
        setdescriptionQuiz,
        onSubmitQuiz,
        open,
        setOpen,
        value,
        setValue,
        items,
        setItems
    }

};

// const idcurrent = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// await createQuizServices(titleQuiz, descriptionQuiz, idcurrent);

// navigation.navigate("CreateQuestion",
// {
//     id: idcurrent,
//     title: titleQuiz,
// }
// )

// setTitleQuiz('');
// setdescriptionQuiz('');
// ToastAndroid.show('Quiz berhasil dibuat', ToastAndroid.SHORT);
