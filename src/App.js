import LoginForm from './pages/LoginForm';
import Content from './pages/ContentPage';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import NewPage from './pages/NewPage';
import CreateUser from './pages/CreateUser';
import { Suspense } from 'react';
import TableDetails from './pages/TableDetails';

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<LoginForm />},
    {path:'/content',element:<Content/>},
    {path:'/content/details',element:<TableDetails/>},
    {path:'/laptop',element:<NewPage />},
    {path:'/user',element:<Suspense fallback={<h2>🌀 Loading...</h2>}>
    <CreateUser/>
  </Suspense>},
    
    
  ])
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
