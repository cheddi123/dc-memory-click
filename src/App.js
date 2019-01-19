import React from "react";
import Header from "./components/Header/Header"
import Images from "./components/Images/Images"
import Bodys from "./components/Body/Body"
import Title from "./components/Title/Title"
import Wrapper from "./components/Wrapper/Wrapper"
import "./App.css"

// function to randomly shuffle the array
function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
    topScore: 0,
    clickedImage: [],
    Images,
    message: "",
  };

  
  handleClick = id => {
    if (this.state.clickedImage.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clickedImage: this.state.clickedImage.concat(id) });
      console.log(id)
      console.log(this.state.clickedImage.indexOf(id))
    } else {
      this.Reset();
      console.log(id)
      console.log(this.state.clickedImage.indexOf(id))

    }
  };



  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    const newScore = this.state.count + 1;
    // the setState method to update a component's state
    this.setState({
      count: newScore,
      isClicked: this.state.clickedImage
    });
    if (newScore >= this.state.topScore) {
      this.setState({ 
        topScore: newScore ,
        message: "Correct guess" 
      });
      console.log(this.state.message)
    }
     if (newScore === Images.length) {
      this.setState({ message: "You win! Click  to play again " });
      console.log(this.state.message)
    }
     else{this.handleShuffle();
    //  console.log(Images.length)

  };
}
 // reset the game back to score zero
  Reset = () => {
    this.setState({
      count: 0,
      topScore: this.state.topScore,
      clickedImage: [],
      message: "",
    });
    this.handleShuffle();
  };

  // function to invoke the shuffleImages function 
  handleShuffle = () => {
    let rearrangedImages = shuffleImages(Images);
    this.setState({ Images: rearrangedImages });
  };


  // The render method returns the JSX that should be rendered
  render() {

    return (
      <Wrapper>
        <div className="card text-center">
          <Header
            count={this.state.count}
            topCount={this.state.topScore}
            alertMessage={this.state.message}
          />
          <div className="card-header bg-primary text-white">
            <Title />
          </div>

        </div>
        <div className="container"> 
        {this.state.Images.map((image) => (

          <span className="container padding " key={image.id}>

            <button className="btn btn-danger grow padding"  >{""}
              <Bodys
                key={image.id}
                photo={image.img}
                id={image.id}
                handleClick={this.handleClick}
                // handleIncrement={this.handleIncrement}
                // handleReset={this.Reset}
                // handleShuffle={this.handleShuffle}
              />

            </button>

          </span>

        ))}
        </div>
      </Wrapper>
    );
  }

}

export default App;
