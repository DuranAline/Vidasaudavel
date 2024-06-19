import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AuthProvider } from './context/AuthContext.tsx';
import { UserProvider } from './context/UserContet.tsx';



function App() {
 return (
   <AuthProvider>
     <UserProvider>
       <RouterProvider router={router} />
     </UserProvider>
   </AuthProvider>
 );
}


export default App;
