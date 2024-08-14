import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { IsErrorView } from '../views/IsErrorView';
import { GeneralLayout } from '../Layouts/GeneralLayout';
import { LoginProvider, useLoginContext } from '../context/LoginProvider';
import { IsHomeView } from '../views/IsHomeView'
import { PrivateRoutes } from '../guards/PrivateRoutes';
import { Login } from '../pages/Login';
import './ValCSS.min.css';


const App = () => {

  const {user} = useLoginContext();

  const router = createBrowserRouter([
    {
      element:      <GeneralLayout/>,
      errorElement: <GeneralLayout><IsErrorView/></GeneralLayout>,
      children:     [
        {
          index:    true,
          element:  <IsHomeView/>,
          path:     '/'
        },{
          element:  <PrivateRoutes user={user}/>,
          path:     '',
          children: [
            {
              element:  <h1>Dashboard</h1>,
              path:     'dashboard'
            },{
              element:  <h1>analytics</h1>,
              path:     'analytics'
            }
          ]
        },{
          element:  <Login/>,
          path:     'login'
        }
      ]
    }
  ]);

  return <RouterProvider router={router}/>

};

export default App;