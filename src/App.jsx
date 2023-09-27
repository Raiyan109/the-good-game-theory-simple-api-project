import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import ItemProvider from './context/ItemProvider'


function App() {

  return (
    <div >
      <ItemProvider>
        <RouterProvider router={routes} />
      </ItemProvider>
    </div>
  )
}

export default App
