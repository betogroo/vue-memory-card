<script setup lang="ts">
import { useMemoryGame } from '../composables'
import { CardComponent } from '../components'
import { Card } from '../types'
const {
  turns,
  shuffledCards,
  choiceOne,
  choiceTwo,
  disabled,
  shuffleCards,
  handleChoice: _handleChoice,
} = useMemoryGame()

shuffleCards()
const handleChoice = (card: Card) => {
  _handleChoice(card)
}
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
          :disabled="disabled"
          :flipped="
            card.matched ||
            choiceOne?.id === card.id ||
            choiceTwo?.id === card.id
          "
          @handle-choice="(n) => handleChoice(n)"
        />
      </div>
      <div class="text-h5">Jogadas: {{ turns }}</div>
    </v-responsive>
  </v-container>
</template>
