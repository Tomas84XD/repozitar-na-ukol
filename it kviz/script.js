const questions = [
    
 
    {
        question: "Jaký je nejúspěšnější Český fotbaloý klub ?",
        optionA: "SK Slávie Praha",
        optionB: "FC Viktoria Plzeň",
        optionC: "Bohemians Praha 1905",
        optionD: "AC Sparta Praha",
        correctOption: "optionD"
    },
 
    {
        question: "Jaký je nejmenší stát na světě?",
        optionA: "Vatikán ",
        optionB: "Monako",
        optionC: "Andorra",
        optionD: "Lichtenštejnsko",
        correctOption: "optionA"
    },
 
    {
        question: "Jaký je celosvětově nejúspěšnější tým ve videohře League of Legends ?",
        optionA: "G2",
        optionB: "Cloud9",
        optionC: "T1",
        optionD: "FNATIC",
        correctOption: "optionC"
    },
 
    {
        question: "Kde se nacházi stát Omán?",
        optionA: "V Africe",
        optionB: "V Asii",
        optionC: "V Evropě",
        optionD: "V Latinské Americe",
        correctOption: "optionB"
    },
 
    {
        question: "Kolik obsidianu potřebuješna portál do netheru v Minecraftu?",
        optionA: "10",
        optionB: "8",
        optionC: "12",
        optionD: "14",
        correctOption: "optionA"
    },
 
    {
        question: "Kdo byl první člověk ve vesmíru ?",
        optionA: "Neil Armstrong",
        optionB: "Vladimír Remek",
        optionC: "Pes Lajka",
        optionD: "Jurij Gagarin",
        correctOption: "optionD"
    },
 
    {
        question: "Jaký Český národní strom?",
        optionA: "lípa",
        optionB: "smrk",
        optionC: "dub",
        optionD: "palma",
        correctOption: "optionA"
    },
 
    {
        question: "kdy skoncila 2. Světová Válka?",
        optionA: "8.5. 1918",
        optionB: "8.5. 1945",
        optionC: "7.12. 1941",
        optionD: "1.9. 1939",
        correctOption: "optionB"
    },
 
    {
        question: "Kdo je nejlepší hráč hry League of Legends?",
        optionA: "Rasmus Borregaard Winther (Caps)",
        optionB: "Heo Su (ShowMaker)",
        optionC: "I Sang-hjok (Faker)",
        optionD: "Marek Brázda (Humanoid)",
        correctOption: "optionC"
    },
 
    {
        question: "Jaké je nejhezčí jméno na světě?",
        optionA: "Gustav",
        optionB: "Augustín",
        optionC: "Jonáš",
        optionD: "Tomáš",
        correctOption: "optionD"
    }
 
]
 
 
let shuffledQuestions = []
 
function handleQuestions() {
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}
 
 
let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0
let indexNumber = 0
 
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
 
}
 
 
function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null
 
    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })
 
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }
 
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
 
        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}
 
 
 
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}
 
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}
 
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}
 
function handleEndGame() {
    let remark = null
    let remarkColor = null
 
    if (playerScore <= 3) {
        remark = "špatné známky, procvičuj ještě."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "průměrný známky, to umíš lépe snad ne?"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "nádhera, jen tak dál"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100
 
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
 
}
 
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}
 
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}