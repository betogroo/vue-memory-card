<script setup lang="ts">
import { useMemoryGame } from '../composables'
import { CardComponent } from '../components'
import { Card } from '../types'
const {
  cards,
  turns,
  shuffledCards,
  choiceOne,
  choiceTwo,
  shuffleCards,
  handleChoice: _handleChoice,
} = useMemoryGame()
const handleChoice = (card: Card) => {
  _handleChoice(card)
}
console.log(cards.value)
</script>
<template>
  <v-container class="d-flex justify-center">
    <v-responsive
      class="text-center"
      width="100%"
    >
      <h1>Jogo da Memória</h1>
      <v-btn @click="shuffleCards">Embaralhar</v-btn>
      <div class="d-flex flex-wrap justify-center">
        <CardComponent
          v-for="card in shuffledCards"
          :key="card.id"
          :card="card"
          @handle-choice="(n) => handleChoice(n)"
        />
      </div>
      <div class="text-h3">{{ turns }}</div>
      <v-divider></v-divider>

      <v-row>
        <v-col>{{ choiceOne?.image }}</v-col>
        <v-col>{{ choiceTwo?.image }}</v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
