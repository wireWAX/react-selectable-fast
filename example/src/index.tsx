import React from 'react'
import { render } from 'react-dom'

import App from './App'
import { items } from './sample-data'

render(<App items={items} />, document.getElementById('demo-container'))
