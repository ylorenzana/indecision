class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      detailsAreVisible: false
    }
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        detailsAreVisible: !prevState.detailsAreVisible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.toggleVisibility}>{this.state.detailsAreVisible ? 'Hide details' : 'Show details'}</button>  
        {this.state.detailsAreVisible && (
          <p>Now you see me</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//   title: 'Visibility Toggle',
//   details: 'Now you see mee',
//   detailsAreVisible: false
// };

// const toggleVisibility = () => {
//   app.detailsAreVisible = !app.detailsAreVisible;
//   renderApp();
// };

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//   const template = (
    // <div>
    //   <h1>{app.title}</h1>
    //   <button onClick={toggleVisibility}>{app.detailsAreVisible ? 'Hide details' : 'Show details'}</button>  
    //   {app.detailsAreVisible && (
    //     <p>{app.details}</p>
    //   )}
    // </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// renderApp();