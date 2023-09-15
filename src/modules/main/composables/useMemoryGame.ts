import { ref } from 'vue'
import type { Card } from '../types'

const cards = ref<Card[]>([
  { id: 1, image: '1' },
  { id: 2, image: '2' },
  { id: 3, image: '3' },
  { id: 4, image: '4' },
  { id: 5, image: '5' },
  { id: 6, image: '6' },
])

const shuffledCards = ref<Card[]>([])
const turns = ref(0)

const useMemoryGame = () => {
  const shuffleCards = () => {
    turns.value = 0
    shuffledCards.value = [...cards.value, ...cards.value]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
  }
  return { cards, turns, shuffleCards, shuffledCards }
}

export default useMemoryGame
