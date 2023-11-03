/* @refresh reload */
import { render } from 'solid-js/web'

import './common/css/style.css'

function App() {
    return (
        <h1>HELLO SOLID</h1>
    )
}

const root = document.getElementById('root')

render(() => <App />, root)
