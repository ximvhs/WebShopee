import './App.css'
import useRouteElemnet from './useRouteElemnet'

function App() {
  const routeElements = useRouteElemnet()
  return <div>{routeElements}</div>
}

export default App
