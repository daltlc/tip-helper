import React, { Component } from 'react';
// import './Form.css';

class Form extends Component {

  constructor(props){
    super(props);


    this.state = {
      dollarPerHour:'',
      arrayOfNumbers: '',
    };

    let memberFunctions = Object.getOwnPropertyNames(NoteForm.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);  }

        handleSubmit(event) {
          event.preventDefault();
      
          this.props.handleComplete(this.state);
          this.setState({
            dollarPerHour: '',
            arrayOfNumbers: '',
          });
        }
      
        handleChange(event) {
          let {name, value, type} = event.target;
      
          this.setState({
            [name]: value,
          });
        }

    render() {
      return (
        <div className="Form">
            <form>
              <label>
              Dollar Per Hour:
                <input 
                 DPH='dollarPerHour' 
                 value = {this.state.dollarPerHour}
                 />
              </label>
              <label>
              Hours Worked:
                <input type="text" name="name" />
              </label>
                {/* <input type="submit" value="Submit" /> */}
            </form>
        </div>
      );
    }
  }
  
  export default Form;