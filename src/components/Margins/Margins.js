import { getLetter } from '../../utils'
import './Margins.css'

export const Ranks = ({ ranks }) => {
	return (
		<div className='margin-ranks'>
			{ranks.map((rank) => (
				<span key={rank}>{rank}</span>
			))}
		</div>
	)
}

export const Files = ({ files }) => {
	return (
		<div className='margin-files'>
			{files.map((file) => (
				<span key={file}>{getLetter(file)}</span>
			))}
		</div>
	)
}
