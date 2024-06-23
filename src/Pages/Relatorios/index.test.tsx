import { render } from '@testing-library/react';
import Reports from ".";
import { AuthContext } from "../../context/AuthContext";

const mockAuthContext = {
    user: { gender: 'male' }, 
    login: async () => {}, 
    logout: async () => {}, 
    register: async () => {} 
};
  
  test('renders Reports component', () => {
    const { getByText } = render(
      <AuthContext.Provider value={mockAuthContext}>
        <Reports />
      </AuthContext.Provider>
    );
    expect(getByText('Seleção de Relatórios')).toBeInTheDocument();
  });
  
  test('renders report selection', () => {
    const { getByText } = render(
      <AuthContext.Provider value={mockAuthContext}>
        <Reports />
      </AuthContext.Provider>
    );
    expect(getByText('Selecione um relatório')).toBeInTheDocument();
  });
