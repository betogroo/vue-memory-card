import { ref, watch } from 'vue'
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
const turns = ref(1)
const choiceOne = ref<Card | null>(null)
const choiceTwo = ref<Card | null>(null)

const useMemoryGame = () => {
  const shuffleCards = () => {
    turns.value = 0
    shuffledCards.value = [...cards.value, ...cards.value]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
  }

  watch(
    () => [choiceOne.value, choiceTwo.value],
    () => {
      if (choiceOne.value && choiceTwo.value) {
        if (choiceOne.value.image === choiceTwo.value.image) {
          console.log('Match')
          resetTurn()
        } else {
          console.log('Dun Match')
          resetTurn()
        }
      }
    },
  )

  const handleChoice = (card: Card) => {
    choiceOne.value ? (choiceTwo.value = card) : (choiceOne.value = card)
  }

  const resetTurn = () => {
    choiceOne.value = null
    choiceTwo.value = null
    turns.value++
  }
  return {
    cards,
    turns,
    choiceOne,
    choiceTwo,
    shuffleCards,
    handleChoice,
    shuffledCards,
  }
}

export default useMemoryGame
