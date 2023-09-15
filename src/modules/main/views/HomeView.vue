<script setup lang="ts">
import { useMemoryGame } from '../composables'
const { cards } = useMemoryGame()

console.log(cards.value)
</script>
<template>
  <v-container class="d-flex justify-center fill-height">
    <v-responsive class="text-center">
      <h1 class="text-center text-h1">Jogo da Memória</h1>

      >
    </v-responsive>
  </v-container>
</template>
