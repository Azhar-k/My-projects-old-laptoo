import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App/App';
import * as serviceWorker from './serviceWorker';

//core css required
import '@ionic/react/css/core.css';

//basic css for all apps built with ionic
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

//Optional css that can be use
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


import './styles/theme/variables.css'

ReactDOM.render(

    <App />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
