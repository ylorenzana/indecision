console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Let RNG make the decision',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const clearOptions = () => {
  app.options.length = 0;
  renderApp();
};

const pickOption = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const optionPicked = app.options[randomNum];
  alert(optionPicked);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button onClick={clearOptions}>Clear list</button>
      <button onClick={pickOption} disabled={app.options.length < 1}>Pick an option!</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
