<script setup lang="ts">
import type { Card } from '../types'
interface Props {
  card: Card
  flipped?: boolean
  backColor?: string
  faceColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  flipped: true,
  backColor: 'red',
  faceColor: 'white',
})

const emit = defineEmits(['handleChoice'])
const handleChoice = () => {
  emit('handleChoice', props.card)
}
</script>

<template>
  <v-card
    class="d-flex flex-column align-center ma-1"
    :class="flipped ? 'flipped' : ''"
    height="85"
    width="85"
  >
    <v-sheet
      v-if="flipped"
      :color="faceColor"
      height="100%"
      width="100%"
      >{{ card.image }} - {{ card.matched }}</v-sheet
    >
    <v-sheet
      v-else
      :color="backColor"
      height="100%"
      width="100%"
      @click="handleChoice()"
      >back
      {{ card.image }}
    </v-sheet>
  </v-card>
</template>
