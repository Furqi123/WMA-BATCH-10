var htmlQuestions  = [
    {
        question: 'HTML stands for',
        option1: 'Hyper Text Modul Language',
        option2: 'Hyper Text Markup Language',     
        option3: 'Hyper Test Markup Language',
        option4: 'Hyperlink Markup Language',
        answer: 'Hyper Text Markup Language'
    },

    {
        question: 'Where we can use the < style > tag?',
        option1: 'In the head element',
        option2: 'In the body element',     
        option3: 'In the head and body elements',
        option4: 'None of above',
        answer: 'In the head and body elements'
    },

    {
        question: 'Which tag is used to create a hyperlink?',
        option1: '< a >',
        option2: '< img >',     
        option3: '< div >',
        option4: '< link >',
        answer: '< a >'
    },
]


var index = 0;
var score = 0;

function renderQuestion(){
var question = document.getElementById('question');
var options = document.getElementsByName('option');


for(var i =0; i < options.length;i++){
    if(options[i].checked){
        console.log(options[i].value,htmlQuestions[index - 1].answer)

        if(options[i].value == htmlQuestions[index - 1].answer){
            score++;
        }
   
  
}

}

if(!htmlQuestions[index]){
    console.log(score)
    return;
}


question.innerHTML = `
<p>${htmlQuestions[index].question}</p>
<div>
<label for=""><input type="radio" value = '${htmlQuestions[index].option1}' name="option" id="">${htmlQuestions[index].option1}</label>
</div>
<div>
<label for=""><input type="radio" value = '${htmlQuestions[index].option2}' name="option" id="">${htmlQuestions[index].option2}</label>
</div>
<div>
<label for=""><input type="radio" value = '${htmlQuestions[index].option3}' name="option" id="">${htmlQuestions[index].option3}</label>
</div>
<div>
<label for=""><input type="radio" value = '${htmlQuestions[index].option4}' name="option" id="">${htmlQuestions[index].option4}</label>
</div>
`
index++;
}

renderQuestion();



