import { ref, watch } from 'vue'
import type { Card } from '../types'

const cards = ref<Card[]>([
  { id: 1, image: '1', matched: false },
  { id: 2, image: '2', matched: false },
  { id: 3, image: '3', matched: false },
  { id: 4, image: '4', matched: false },
  { id: 5, image: '5', matched: false },
  { id: 6, image: '6', matched: false },
])

const shuffledCards = ref<Card[]>([])
const turns = ref(0)
const choiceOne = ref<Card | null>(null)
const choiceTwo = ref<Card | null>(null)
const disabled = ref<boolean>(false)

const useMemoryGame = () => {
  const shuffleCards = () => {
    turns.value = 0
    choiceOne.value = null
    choiceTwo.value = null
    shuffledCards.value = [...cards.value, ...cards.value]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
  }

  const matchCard = () => {
    shuffledCards.value = shuffledCards.value.map((card) => {
      if (card.image === choiceOne.value?.image) {
        return { ...card, matched: true }
      } else {
        return card
      }
    })
  }

  watch(
    () => [choiceOne.value, choiceTwo.value],
    () => {
      if (choiceOne.value && choiceTwo.value) {
        disabled.value = true
        if (choiceOne.value.image === choiceTwo.value.image) {
          matchCard()
          resetTurn()
        } else {
          console.log('Dun Match')
          setTimeout(() => {
            resetTurn()
          }, 1000)
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
    disabled.value = false
  }
  return {
    cards,
    turns,
    choiceOne,
    choiceTwo,
    disabled,
    shuffleCards,
    handleChoice,
    shuffledCards,
  }
}

export default useMemoryGame
