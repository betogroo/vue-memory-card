<script setup lang="ts">
import { useMemoryGame } from '../composables'
import { CardComponent } from '../components'
const { cards, turns, shuffledCards, shuffleCards } = useMemoryGame()

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
        />
      </div>
      <div class="text-h3">{{ turns }}</div>
    </v-responsive>
  </v-container>
</template>
