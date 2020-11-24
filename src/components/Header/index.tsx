import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDownCircle } from 'react-icons/fi';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        {
          <Link to={`/import`} >
            <FiArrowDownCircle size={20} />
            <span>Importar</span>
          </Link>
        }
      </nav>
    </header>
  </Container>
);

export default Header;
