export const getLetter = (n) => {
	return String.fromCharCode(n + 96)
}

export const generatePiecePositions = () => {
	const positions = new Array(8).fill().map(() => new Array(8).fill(''))

	// white pieces
	positions[0][0] = 'wr'
	positions[0][1] = 'wn'
	positions[0][2] = 'wb'
	positions[0][3] = 'wq'
	positions[0][4] = 'wk'
	positions[0][5] = 'wb'
	positions[0][6] = 'wn'
	positions[0][7] = 'wr'

	positions[1] = new Array(8).fill('w') // white pawns

	// black pieces
	positions[7][0] = 'br'
	positions[7][1] = 'bn'
	positions[7][2] = 'bb'
	positions[7][3] = 'bq'
	positions[7][4] = 'bk'
	positions[7][5] = 'bb'
	positions[7][6] = 'bn'
	positions[7][7] = 'br'

	positions[6] = new Array(8).fill('b') // black pawns

	return positions
}

export const copyPosition = (positions) => {
	const newPosition = new Array(8).fill().map(() => new Array(8).fill(''))

	for (let rank = 0; rank < 8; rank++) {
		for (let file = 0; file < 8; file++) {
			newPosition[rank][file] = positions[rank][file]
		}
	}

	return newPosition
}
