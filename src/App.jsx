import './App.css'
import { AppLayout } from './layout/app-layout'
import AppRouter from './router/AppRouter'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          {AppRouter.map(({ component, id, path }) =>
            <Route path={path} element={component} key={id} index={path ? false : true} />
          )}
        </Route>
      </Routes>
    </>
  )
}

export default App
