import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css"
import { MoviesList } from '../Movies/MoviesList';
import MovieDetail from '../Movies/MovieDetail';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path={`/movie/:id`}>
						<MovieDetail />
					</Route>
					<Route path='/'>
						<MoviesList />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}


export default App;
