import {createContext, useState} from 'react'
import { JokeType } from '../types'


const JokeContext = createContext({})

export const JokeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [select, setSelect] = useState<JokeType>([{
        id: '18',
        type: 'general',
        setup: "something passed in front of the king's house withoutgreetin the king ",
        punchline: 'Rain'
    }])
    return (
        <JokeContext.Provider value={{select, setSelect}}>
            {children}
        </JokeContext.Provider>
    )
}

export default JokeContext