import LoginForm from './pages/LoginForm';
import Content from './pages/ContentPage';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import NewPage from './pages/NewPage';

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<LoginForm />},
    {path:'/content',element:<Content/>},
    {path:'/laptop',element:<NewPage />}
    
    
  ])
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
