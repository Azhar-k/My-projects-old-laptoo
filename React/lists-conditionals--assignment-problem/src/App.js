import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    displayText:""
  }
  inputChangeHandler = (event) => {
    const enteredText=event.target.value;
    this.setState({
      displayText:enteredText
    })
  }

  deleteCharecter=(index)=>{
    const text = this.state.displayText.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({displayText: updatedText});
  }
  render() {

    let charComponents = null;
    let displayLength=null;
    if(this.state.displayText!=null && this.state.displayText!=""){
      displayLength=(<p>{this.state.displayText.length}</p>)
      
      let textArray = this.state.displayText.split("");
      charComponents=(
        <div>
          
          {
            textArray.map((c,index)=>{
              console.log(c);
               return <CharComponent  letter={c} key={index} click={()=>{this.deleteCharecter(index)}}></CharComponent>
            }) 
          }

        </div>
      )
      

    }
    
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input onChange={this.inputChangeHandler} value={this.state.displayText}></input>
        {displayLength}
        <ValidationComponent text={this.state.displayText}></ValidationComponent>
        {charComponents}
      </div>
    );
  }
}

export default App;
