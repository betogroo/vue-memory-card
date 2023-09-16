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
  >
    <v-sheet
      class="front"
      :color="faceColor"
      height="85"
      width="85"
      >{{ card.image }} - {{ card.matched }}</v-sheet
    >
    <v-sheet
      class="back"
      :color="backColor"
      height="85"
      width="85"
      @click="handleChoice()"
      >back
      {{ card.image }}
    </v-sheet>
  </v-card>
</template>

<style lang="scss" scoped>
.front {
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;
}

.flipped .front {
  transform: rotateY(0deg);
  transition-delay: 0.2s;
}
.back {
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
}
.flipped .back {
  transform: rotateY(90deg);
  transition-delay: 0s;
}
</style>
