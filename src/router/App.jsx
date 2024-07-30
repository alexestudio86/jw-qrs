import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { IsErrorView } from '../views/IsErrorView';
import { GeneralLayout } from '../Layouts/GeneralLayout';
import { LoginProvider, useLoginContext } from '../context/LoginProvider';
import { Welcome } from '../components/Welcome'
import { PrivateRoutes } from '../guards/PrivateRoutes';
import { Login } from '../components/Login';
import './app.css';


const App = () => {

  const {user} = useLoginContext();

  const router = createBrowserRouter([
    {
      element:      <GeneralLayout/>,
      errorElement: <GeneralLayout><IsErrorView/></GeneralLayout>,
      children:     [
        {
          index:    true,
          element:  <Welcome/>,
          path:     '/'
        },{
          element:  <PrivateRoutes user={user}/>,
          path:     '',
          children: [
            {
              element:  <Login/>,
              path:     'login'
            },{
              element:  <h1>analytics</h1>,
              path:     'analytics'
            }
          ]
        },{
          element:  <h1>Dashboard</h1>,
          path:     'dashboard'
        }
      ]
    }
  ]);

  return <RouterProvider router={router}/>

};

export default App;