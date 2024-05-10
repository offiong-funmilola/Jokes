import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Jokes from './components/Jokes'
import Error from './components/Error'
import Library from './components/Library'
import { JokeProvider } from './components/context/JokeContext'

function App() {
  const router = createBrowserRouter([
    {path: '/',
      element: <Jokes />,
      errorElement: <Error/>
    },
    {path: '/library',
      element: <Library />,
      errorElement: <Error/>
    }
  ])
  return (
    <>
    <JokeProvider>
      <RouterProvider router={router}/> 
    </JokeProvider>
        
    </>
  )
}

export default App
