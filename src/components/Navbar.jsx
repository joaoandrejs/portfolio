import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';
import ThemeToggleButton from './ToggleThemeButton';

const Bar = styled.nav`
  color: var(--text-color);
  background: transparent;
  padding-bottom: 10px;
  font-size: 700;

  margin: 12px auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  height: 70px;
  align-items: center;
`;

const MainNav = styled.ul`
  list-style-type: none;
  flex-direction: column;

  display: flex !important;
  margin-right: 30px;
  flex-direction: row;
  justify-content: flex-end;
  
  color: var(--text-color);
  position: relative;
  transition: ease-in-out 0s;
`;

const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  text-decoration-color: var(--secondary-color);
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 15px 10px auto;
  
  &:hover {
    transform: translate(0, 2.5px);
  }

  &:active {
    transform: translate(0, 5px);
  }
`;

const Title = styled.h1`
  //display: flex;
  color: var(--text-color);
  decoration: none;
  line-height: 1;
  margin-top: 23px;
  font-weight: 700;
  margin-left: 1em;
  cursor: pointer;

  &:hover {
    transform: translate(0, 2.5ox);
  }

  &:active {
    transform: translate(0, 5px);
  }

  @media (min-width:770px) {
	  display: flex;
  }
`;

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {displayNav: (props.displayNav ? 'flex' : 'none')};
  }

  render() {
    return (
      <Bar>
        <Title>
          <NavLink to='/'>João Paulo</NavLink>
          <ThemeToggleButton />
        </Title>
        

        <MainNav display={this.state.displayNav}>
          <NavLi>
            <NavLink to="/home">Home</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/projects">Projects</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/about">About</NavLink>
          </NavLi>
        </MainNav>
      </Bar>
    );
  }
}

Navbar.propTypes = {
  displayNav: PropTypes.bool,
};

export default Navbar;
