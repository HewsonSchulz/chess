import { Files, Ranks } from '../Margins/Margins'
import { Pieces } from '../Pieces/Pieces'
import './Board.css'

export const Board = () => {
	const ranks = Array(8) // [8, ..., 1]
		.fill()
		.map((x, i) => 8 - i)
	const files = Array(8) // [a, ..., h]
		.fill()
		.map((x, i) => i + 1)

	const getTileClass = (rank, file) => {
		return (rank + file) % 2 === 0 ? 'tile tile-dark' : 'tile tile-light'
	}

	return (
		<div className='board'>
			<Ranks ranks={ranks} />

			<div className='tiles'>
				{ranks.map((rank, i) =>
					files.map((file, j) => (
						<div key={rank + '-' + file} className={getTileClass(9 - i, j)}>
							{/* {rank} */}
							{/* {file} */}
						</div>
					))
				)}
			</div>

			<Pieces />

			<Files files={files} />
		</div>
	)
}
