<script setup lang="ts">
import { useMemoryGame } from '../composables'
const { cards, turns, shuffleCards, shuffledCards } = useMemoryGame()

console.log(cards.value)
</script>
<template>
  <v-container class="d-flex justify-center">
    <v-responsive class="text-center">
      <h1>Jogo da Memória</h1>
      <v-btn @click="shuffleCards">Embaralhar</v-btn>
      <ul>
        <li
          v-for="item in shuffledCards"
          :key="item.id"
        >
          {{ item.image }}
        </li>
      </ul>
      <div class="text-h5">{{ turns }}</div>
    </v-responsive>
  </v-container>
</template>
