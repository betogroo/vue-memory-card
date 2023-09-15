import { ref } from 'vue'

interface Card {
  id?: number
  image?: string
}

const cards = ref<Card[]>([
  { id: 1, image: '1' },
  { id: 2, image: '2' },
  { id: 3, image: '3' },
  { id: 4, image: '4' },
  { id: 5, image: '5' },
  { id: 6, image: '6' },
])

const useMemoryGame = () => {
  return { cards }
}

export default useMemoryGame
