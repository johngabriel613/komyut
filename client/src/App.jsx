import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './layout/RootLayout';
import Plan from './pages/Plan';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/plan-a-route' element={<Plan/>}/>
    </Route>
  ));

  return <RouterProvider router={router}/>
}

export default App
