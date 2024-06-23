
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import { router } from './routes';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContet';
import { RouterProvider } from 'react-router-dom';

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
