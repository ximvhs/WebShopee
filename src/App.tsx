import { ToastContainer } from 'react-toastify'
import './App.css'
import useRouteElemnet from './useRouteElemnet'

function App() {
  const routeElements = useRouteElemnet()
  return (
    <div>
      {routeElements}
      <ToastContainer />
    </div>
  )
}

export default App
