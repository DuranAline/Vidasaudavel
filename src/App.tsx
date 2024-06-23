// src/App.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'; // Assumindo que seu CSS global está em global.css
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContet';

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
