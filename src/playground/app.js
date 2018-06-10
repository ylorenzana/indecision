class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.clearOptions = this.clearOptions.bind(this);
    this.pickOption = this.pickOption.bind(this);
    this.state = {
      options: []
    };
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

  componentWillUnmount() {

  }

  addOption(option) {
    if (!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists'
    }

    this.setState((prevState) => ({ 
      options: prevState.options.concat(option) 
    }));
  }

  deleteOption(optionToDelete) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToDelete)
    }));
  }

  pickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const optionPicked = this.state.options[randomNum];
    alert(optionPicked);
  }

  clearOptions() {
    this.setState(() => ({ options: [] }));
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Let RNG decide for you';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
        hasOptions={this.state.options.length > 0}
        pickOption={this.pickOption}
        />
        <Options 
          options={this.state.options} 
          clearOptions={this.clearOptions}
          deleteOption={this.deleteOption}
        />
        <AddOption 
          addOption={this.addOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.pickOption}
        disabled={!props.hasOptions}
      >Roll the dice
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.clearOptions}>Clear options list</button>
      {props.options.length === 0 && <p>Add an option to get started!</p>}
      <ul>
        {
          props.options
            .map((option) => (
              <Option 
                key={option}
                optionText={option} 
                deleteOption={props.deleteOption}/>
            ))
        }
      </ul>
    </div>
  );
};

const Option = (props) => {
  return (
    <li>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.deleteOption(props.optionText);
        }}>
        Remove Option
      </button>
      </li>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined
    }
  };

  addOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);

    this.setState(() => ({ error }));
    
    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
