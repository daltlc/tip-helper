import React, { Component } from 'react';
// import './Form.css';

class Form extends Component {

  constructor(props){
    super(props);


    this.state = {
      dollarPerHour:'',
      arrayOfNumbers: '',
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   let {name, value} = event.target;

  //   this.setState({ [name]: value });
  // }

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