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
