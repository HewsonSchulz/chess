export const getLetter = (n) => {
	return String.fromCharCode(n + 96)
}

export const generatePiecePosition = () => {
	const position = new Array(8).fill().map(() => new Array(8).fill(''))

	// white pieces
	position[0][0] = 'wr'
	position[0][1] = 'wn'
	position[0][2] = 'wb'
	position[0][3] = 'wq'
	position[0][4] = 'wk'
	position[0][5] = 'wb'
	position[0][6] = 'wn'
	position[0][7] = 'wr'

	// position[1] = new Array(8).fill('w') // white pawns

	// black pieces
	position[7][0] = 'br'
	position[7][1] = 'bn'
	position[7][2] = 'bb'
	position[7][3] = 'bq'
	position[7][4] = 'bk'
	position[7][5] = 'bb'
	position[7][6] = 'bn'
	position[7][7] = 'br'

	// position[6] = new Array(8).fill('b') // black pawns

	return position
}

export const copyPosition = (position) => {
	const newPosition = new Array(8).fill().map(() => new Array(8).fill(''))

	for (let rank = 0; rank < 8; rank++) {
		for (let file = 0; file < 8; file++) {
			newPosition[rank][file] = position[rank][file]
		}
	}

	return newPosition
}

export const getAppData = (appContext) => {
	const { appState, dispatch } = appContext
	const { turn, position } = appState
	const currentPosition = position[position.length - 1]

	return [dispatch, turn, position, currentPosition]
}
