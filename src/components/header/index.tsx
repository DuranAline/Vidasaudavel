import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './header.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export function Header() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      alert('Logout realizado com sucesso!');
    } catch (error) {
      if (error instanceof Error) {
        alert('Erro ao realizar logout: ' + error.message);
      } else {
        alert('Erro ao realizar logout.');
      }
    }
  };

  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <span>VidaSaudável</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/atividades">Atividades</Nav.Link>
              <Nav.Link as={Link} to="/alimentacao">Alimentação</Nav.Link>
              <Nav.Link as={Link} to="/relatorios">Relatórios</Nav.Link>
              <Nav.Link as={Link} to="/sinais-vitais">Sinais Vitais</Nav.Link>
              <NavDropdown title="Mais" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/cadastro">Cadastro</NavDropdown.Item>
                {/* Adicione outros itens do dropdown aqui */}
              </NavDropdown>
            </Nav>
            {user ? (
              <button onClick={handleLogout} className="btn btn-outline-danger">Logout</button>
            ) : (
              <Link className="btn btn-outline-success" to="/login">Login</Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
