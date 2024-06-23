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

  const getUserIcon = () => {
    if (!user) {
      return '/images/ano.png';
    } else if (user.gender === 'female') {
      return '/images/girl.png';
    } else if (user.gender === 'male') {
      return '/images/boy.png';
    } else {
      return '/images/ano.png';
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
            <div className="user-info d-flex align-items-center">
              <img src={getUserIcon()} alt="User Icon" className="user-icon" />
              {user ? (
                <button onClick={handleLogout} className="btn btn-outline-danger ms-2">Logout</button>
              ) : (
                <Link className="btn btn-outline-success ms-2" to="/login">Login</Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
