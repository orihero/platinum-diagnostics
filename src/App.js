import React from 'react'
import AppRouter from './routes'
import {init} from 'emailjs-com'

const user_id = 'user_1W4oBZ0C9NKu1rGCruuUq'

const App = () => {
    init(user_id)

    return(
        <AppRouter />
    )
}

export default App