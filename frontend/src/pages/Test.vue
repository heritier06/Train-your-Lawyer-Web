<template>
    <div class="container">
      <div class="correctAnswers">
        You have
        <strong>{{ correctAnswers }} correct {{ pluralizeAnswer }}!</strong>
      </div>
      <div class="correctAnswers">
        Currently at question {{ index + 1 }} of {{ questions.length }}
      </div>
    
      <h2 v-html="loading ? 'Loading...' : currentQuestion.question" ></h2>
      <!-- Only first question is displayed -->
      <form v-if="currentQuestion">
        <button
          v-for="answer in currentQuestion.answers"
          :index="currentQuestion.key"
          :key="answer"
          v-html="answer"
          @click.prevent="handleClick"
        ></button>
      </form>
    </div>
   </template>

<script> 
    fetchQuestions() 
    {
         this.loading = true;
     //fetching questions from API
        let response = await fetch("https://opentdb.com/api.php?amount=5&category=21&type=multiple");
        let index = 0; //To identify single answer
        let data = await response.json();
        let questions = data.results.map((question) => {
        question.answers = [
            question.correct_answer,
            ...question.incorrect_answers,
        ];
       //shuffle above array
       for (let i = question.answers.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [question.answers[i], question.answers[j]] = [
           question.answers[j],
           question.answers[i],
         ];
       }
       //add right answers and key
       question.rightAnswer = null;
       question.key = index;
       index++;
       return question;
     });
     this.questions = questions;
     this.loading = false;
   }

   currentQuestion() 
   {
     if (this.questions !== []) {
       return this.questions[this.index];
     }
     return null;
   }

   correctAnswers() 
   {
     if (this.questions && this.questions.length > 0) {
       let streakCounter = 0;
       this.questions.forEach(function (question) {
         if (!question.rightAnswer) {
           return;
         } else if (question.rightAnswer === true) {
           streakCounter++;
         }
       });
       return streakCounter;
     } else {
       return "--";
     }
   }

score() 
{
     if (this.questions !== []) {
       return {
         allQuestions: this.questions.length,
         answeredQuestions: 
     this.questions.reduce((count, currentQuestion) => {
           if (currentQuestion.userAnswer) {
             // userAnswer is set when user has answered a question, no matter if right or wrong
             count++;
           }
           return count;
         }, 0),
         correctlyAnsweredQuestions: this.questions.reduce(
           (count, currentQuestion) => {
             if (currentQuestion.rightAnswer) {
               // rightAnswer is true, if user answered correctly
               count++;
             }
             return count;
           },
           0
         ),
       };
     } else {
       return {
         allQuestions: 0,
         answeredQuestions: 0,
         correctlyAnsweredQuestions: 0,
       };
     }
   }

   watch: {
   quizCompleted(completed) 
   {
     completed &&
       setTimeout(() => {
         this.$emit("quiz-completed", this.score);
       }, 3000);
   }
 }

 checkCorrectAnswer(e, index) 
 {
     let question = this.questions[index];
     if (question.userAnswer) {
       if (this.index < this.questions.length - 1) {
         setTimeout(
           function () {
             this.index += 1;
           }.bind(this),
           3000
         );
       }
       if (question.userAnswer === question.correct_answer) {
         /* Set class on Button if user answered right, to celebrate right answer with animation joyfulButton */
         e.target.classList.add("rightAnswer");
         /* Set rightAnswer on question to true, computed property can track a streak out of 20 questions */
         this.questions[index].rightAnswer = true;
       } else {
         /* Mark users answer as wrong answer */
         e.target.classList.add("wrongAnswer");
         this.questions[index].rightAnswer = false;
         /* Show right Answer */
         let correctAnswer = this.questions[index].correct_answer;
         let allButtons = document.querySelectorAll(`[index="${index}"]`);
         allButtons.forEach(function (button) {
           if (button.innerHTML === correctAnswer) {
             button.classList.add("showRightAnswer");
           }
         });
       }
     }
   }
</script>