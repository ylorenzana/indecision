import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  addOption = (option) => {
    if (!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists'
    }

    this.setState((prevState) => ({ 
      options: prevState.options.concat(option) 
    }));
  }

  deleteOption = (optionToDelete) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToDelete)
    }));
  }

  pickOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    this.setState(() => ({ selectedOption }))
  }

  clearOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  clearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Let RNG decide for you';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action 
          hasOptions={this.state.options.length > 0}
          pickOption={this.pickOption}
          />
          <div className="widget">
            <Options 
            options={this.state.options} 
            clearOptions={this.clearOptions}
            deleteOption={this.deleteOption}
          />
            <AddOption 
              addOption={this.addOption}
            />
          </div>
          
        </div>
        
        <OptionModal 
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  }
}
