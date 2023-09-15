<script setup lang="ts">
import type { Card } from '../types'
interface Props {
  card: Card
  turned?: boolean
  backColor?: string
  faceColor?: string
}

withDefaults(defineProps<Props>(), {
  turned: true,
  backColor: 'red',
  faceColor: 'white',
})
</script>

<template>
  <v-card
    class="d-flex align-center pa-3 ma-1"
    :color="faceColor"
    height="85"
    width="85"
  >
    <v-card-text
      v-show="turned"
      class="text-h3 text-center"
      >{{ card.image }}</v-card-text
    >
  </v-card>
</template>
