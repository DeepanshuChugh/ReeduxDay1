import './App.css';
import Index from './Main';
import { Provider } from 'react-redux';
import { store } from './store';
import { InputProvider } from './InputContext';

function App() {
  return (
    <div className="App">
      <InputProvider>
      <Provider store={store}>
    <Index/>
    </Provider>
    </InputProvider>
    </div>
  );
}

export default App;
