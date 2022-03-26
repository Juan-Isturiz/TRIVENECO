import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './utils/firebaseConfig'
import {MuiPickersUtilsProvider} from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns';

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils= {DateFnsUtils} >
    <App />
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
