import {useEffect, useState, useContext} from 'react'
import { FaEye, FaRegBookmark } from 'react-icons/fa'
import { IoReloadCircleSharp } from "react-icons/io5";
import Navbar from './Navbar'
import {JokeType, ContextType, ItemType} from './types'
import JokeContext from './context/JokeContext';
import { useNavigate } from 'react-router-dom';



function Jokes() {
    const navigate = useNavigate()
    const {select, setSelect} = useContext(JokeContext) as ContextType
    const [jokes, setJokes] = useState<JokeType>([])
    const [sourceJokes, setSourceJokes] = useState<JokeType>([])
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    
    useEffect(()=> {
        fetchData()
    },[])
    
    const fetchData = async() => {
        const response = await fetch('https://official-joke-api.appspot.com/random_ten')
        const data = await response.json()
        setSourceJokes(data)
    }

    const getMeRandomElements = (sourceArray: JokeType, neededElements:number) => {
        let result:JokeType = []
        if(neededElements > sourceArray.length){
            throw new Error('Number of elements needed is more than the elements in the source array')
        }
        for (var i = 0; i < neededElements; i++) {
            result.push(sourceArray[Math.floor(Math.random()*sourceArray.length)]);
        }
        return result
    }

    const handleReload = async() => {
        console.log(sourceJokes)
        const result = await getMeRandomElements(sourceJokes, 3)
        setJokes(result)
    }

    const handleSelection = (marked: ItemType) => {
        console.log(select)
        setSelect([...select, marked])
        navigate('/library')
    }


    return (
        <div className='wrapper'>
            <div className='main-wrapper'>
                <Navbar/>
                <div className='display-wrapper'>
                    {jokes && jokes.map((joke, index) => {
                        return (
                            <div key={joke.id} className='joke-display'>
                                <div className='item-display'>
                                    <p className='txt'>{joke.type}</p>
                                    <h4 className='txt'>{joke.setup}</h4>
                                    {currentIndex !== index && (
                                        <button className='btn' onClick={(e) => {setCurrentIndex(index)}}>
                                        <p className='txt'>Show </p>
                                        <FaEye className='icon'/>
                                    </button>
                                    )}
                                    {currentIndex === index && <p>{joke.punchline}</p>}
                                </div>
                                <div className='save'><FaRegBookmark className='icon' onClick={(e) => {handleSelection(joke)}}/></div>
                            </div>
                        )
                    })}
                </div> 
                <button onClick={handleReload} className='re-load'><IoReloadCircleSharp className='icon'/></button>

            </div>
        </div>
    )
}

export default Jokes
