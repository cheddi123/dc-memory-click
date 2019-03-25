import React from 'react';
import Header from './components/Header/Header';
import Images from './components/Images/Images';
import Bodys from './components/Body/Body';
import Title from './components/Title/Title';
import Wrapper from './components/Wrapper/Wrapper';
import './App.css';

// function to randomly shuffle the array
function shuffleImages(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
}

class App extends React.Component {
	// Setting the initial state of the Counter component
	state = {
		count: 0,
		topScore: 0,
		clickedImage: [],
		Images,
		message: 'Click the image',
	};

	//function to handle the click event
	handleClick = id => {
		const newScore = this.state.count + 1;
		if (this.state.clickedImage.indexOf(id) === -1) {
			if (newScore === Images.length) {
				this.Reset();

				console.log(this.state.message);
				// this.Reset()
			} else if (newScore < Images.length) {
				this.setState({
					clickedImage: this.state.clickedImage.concat(id),
					count: newScore,
					topScore: this.state.count >= this.state.topScore ? newScore : this.state.topScore,
					message: 'Correct guess',
				});

				console.log('The  score is  ' + this.state.count);
				console.log('The  topscore is  ' + this.state.topScore);

				console.log('The  image id is ' + id);
				// console.log(this.state.clickedImage.indexOf(id))
			}
		} else {
			this.setState({
				count: 0,
				topScore: this.state.topScore,
				clickedImage: [],
				message: 'Incorrect ',
			});

			console.log('you already clicked image id ' + id);
			console.log('the count is ' + this.state.count);
			console.log('the topscore is ' + this.state.topScore);
		}

		this.handleShuffle();
	};

	// reset the game back to score zero
	Reset = () => {
		this.setState({
			count: 0,
			topScore: 0,
			clickedImage: [],
			message: 'You win . Click to play again ',
		});
		// this.handleShuffle();
	};

	// function to invoke the shuffleImages function
	handleShuffle = () => {
		let rearrangedImages = shuffleImages(Images);
		this.setState({ Images: rearrangedImages });
	};

	// The render method returns the JSX that should be rendered
	render() {
		console.log(Images.length);
		console.log(Images[2].img);
		return (
			<Wrapper>
				<Header count={this.state.count} topCount={this.state.topScore} alertMessage={this.state.message} />
				<Title />

				<div className="container">
					{this.state.Images.map(image => (
						<span className="container padding img-fluid " key={image.id}>
							<button className="btn btn-danger grow padding">
								{''}

								<Bodys key={image.id} photo={image.img} id={image.id} handleClick={this.handleClick} />
							</button>
						</span>
					))}
				</div>
			</Wrapper>
		);
	}
}

export default App;
