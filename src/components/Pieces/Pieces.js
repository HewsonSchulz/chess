import { useRef } from 'react'
import { copyPosition, getAppData } from '../../utils'
import { Piece } from './Piece'
import './Pieces.css'
import { useAppContext } from '../../contexts/Context'
import { makeNewMove } from '../../reducer/actions/move'

export const Pieces = () => {
	// const [position, setPosition] = useState(generatePiecePosition())
	const ref = useRef()

	const [dispatch, turn, position, currentPosition] = getAppData(useAppContext())

	const calcCoords = (e) => {
		const { width, left, top } = ref.current.getBoundingClientRect()
		const x = 7 - Math.floor((e.clientY - top) / (width / 8))
		const y = Math.floor((e.clientX - left) / (width / 8))
		return { x, y }
	}

	const onDrop = (e) => {
		const newPosition = copyPosition(currentPosition)
		const { x, y } = calcCoords(e)

		const [piece, rank, file] = e.dataTransfer.getData('text').split(',')

		newPosition[rank][file] = ''
		newPosition[x][y] = piece

		dispatch(makeNewMove({ newPosition }))
	}

	return (
		<div className='pieces' onDrop={onDrop} onDragOver={(e) => e.preventDefault()} ref={ref}>
			{currentPosition.map((rank, i) =>
				rank.map((file, j) =>
					currentPosition[i][j] ? (
						<Piece key={i + '-' + j} rank={i} file={j} piece={currentPosition[i][j]} />
					) : null
				)
			)}
		</div>
	)
}
