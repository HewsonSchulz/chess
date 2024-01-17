import { Board } from './components/Board/Board'
import './App.css'
import { AppContext } from './contexts/Context'
import { useReducer } from 'react'
import { reducer } from './reducer/reducer'
import { initGameState } from './constant'

export const App = () => {
	const [appState, dispatch] = useReducer(reducer, initGameState)
	const providerState = {
		appState,
		dispatch,
	}

	return (
		<AppContext.Provider value={providerState}>
			<div className='app-container'>
				<Board />
			</div>
		</AppContext.Provider>
	)
}
