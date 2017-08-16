import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './AppComponent';
import '../index.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <AppComponent />
  </MuiThemeProvider>,
  document.getElementById('app')
);
