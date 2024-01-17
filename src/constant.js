import { generatePiecePosition } from './utils'

export const initGameState = {
	position: [generatePiecePosition()],
	turn: 'w',
}
