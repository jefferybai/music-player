import React from 'react';
import './App.css';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';

import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/index';

function App() {

  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
        </div>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
