<script setup lang="ts">
import type { Card } from '../types'
interface Props {
  card: Card
  flipped?: boolean
  backColor?: string
  faceColor?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  flipped: true,
  disabled: false,
  backColor: 'red',
  faceColor: 'white',
})

const emit = defineEmits(['handleChoice'])
const handleChoice = () => {
  if (!props.disabled) emit('handleChoice', props.card)
}
</script>

<template>
  <div
    class="d-flex flex-column align-center ma-1"
    :class="flipped ? 'flipped' : ''"
  >
    <v-card
      class="front"
      :color="faceColor"
      :disabled="disabled"
      height="85"
      width="85"
    >
      <v-img :src="`../../../../public/${card.image}.jfif`"></v-img>
    </v-card>
    <v-card
      class="back"
      :color="backColor"
      :disabled="disabled"
      height="85"
      width="85"
      @click="handleChoice()"
      ><v-img src="../../../../public/card_back_steam.jfif"></v-img>
    </v-card>
  </div>
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
