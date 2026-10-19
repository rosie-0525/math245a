import { startDeck } from '../../src/deck.js'

startDeck(import.meta.glob('./slides/**/*.html', { query: '?raw', eager: true }))
