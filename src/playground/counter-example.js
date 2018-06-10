class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addToCount = this.addToCount.bind(this);
    this.substractFromCount = this.substractFromCount.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const count = parseInt(localStorage.getItem('count'), 10);
    
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  addToCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  substractFromCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  reset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addToCount}>Add to count</button>
        <button onClick={this.substractFromCount}>Substract from count</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;

// const addToCount = () => {
//   count += 1;
//   renderCounterApp();
// };

// const substractFromCount = () => {
//   count -= 1;
//   renderCounterApp();  
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();  
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addToCount}>Add to count</button>
//       <button onClick={substractFromCount}>Substract from count</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);  
// };

// renderCounterApp();