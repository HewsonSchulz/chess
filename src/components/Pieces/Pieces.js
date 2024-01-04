import { useRef, useState } from 'react'
import { copyPosition, generatePiecePositions } from '../../utils'
import { Piece } from './Piece'
import './Pieces.css'

export const Pieces = () => {
	const [positions, setPositions] = useState(generatePiecePositions())
	const ref = useRef()

	const calcCoords = (e) => {
		const { width, left, top } = ref.current.getBoundingClientRect()
		const x = 7 - Math.floor((e.clientY - top) / (width / 8))
		const y = Math.floor((e.clientX - left) / (width / 8))
		return { x, y }
	}

	const onDrop = (e) => {
		const newPosition = copyPosition(positions)
		const { x, y } = calcCoords(e)

		const [piece, rank, file] = e.dataTransfer.getData('text').split(',')

		newPosition[rank][file] = ''
		newPosition[x][y] = piece

		setPositions(newPosition)
	}

	return (
		<div className='pieces' onDrop={onDrop} onDragOver={(e) => e.preventDefault()} ref={ref}>
			{positions.map((rank, i) =>
				rank.map((file, j) =>
					positions[i][j] ? <Piece key={i + '-' + j} rank={i} file={j} piece={positions[i][j]} /> : null
				)
			)}
		</div>
	)
}
