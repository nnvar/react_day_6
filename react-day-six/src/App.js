import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider, 
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Layout from './components/LayOut';
//import ErrorPage from './pages/ErrorPage';
import Pokemon from './pages/Pokemon';
import Wiki from './pages/Wiki';




const router = createBrowserRouter([
  {
    path: "/home",
    element: <Layout />,
    //errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
     { path: "pokemon/:pokemonID", element: <Pokemon /> },
     { path: "wiki", element: <Wiki /> },
    ]
  },
  {
    path: "/",
    element: <SignIn />
  }
]);


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}
  

export default App;
