import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import ThemeToggleButton from './ToggleThemeButton';
import '../App.css';

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

  &:focus {
      text-decoration: underline solid var(--secondary-color);
  }
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
  text-decoration: none;
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
    transform: translate(0, 2.5px);
  }

  &:active {
    transform: translate(0, 5px);
  }

  @media (min-width:770px) {
    display: flex;
  }
`;

const Dropdown = styled.select`
  margin: 15px 10px;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1em;
  cursor: pointer;

  &:hover {
    transform: translate(0, 2.5px);
  }

  &:active {
    transform: translate(0, 5px);
  }
  
  &:focus {
    outline: none;
  }
`;

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayNav: props.displayNav ? 'flex' : 'none',
    };
  }

  handleLanguageChange = (event) => {
    const { i18n } = this.props;
    i18n.changeLanguage(event.target.value);
  };
  
  render() {
    const { t } = this.props;

    return (
      <Bar>
        <Title>
          <NavLink to='/'>João Paulo</NavLink>
          <ThemeToggleButton />
        </Title>
        
        <MainNav style={{ display: this.state.displayNav }}>
          <NavLi>
            <NavLink to="/home">{t('navbar.home')}</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/projects">{t('navbar.projects')}</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/about">{t('navbar.about')}</NavLink>
          </NavLi>
          <NavLi>
            <Dropdown onChange={this.handleLanguageChange}>
              <option value="en">English</option>
              <option value="pt">Português</option>
            </Dropdown>
          </NavLi>
        </MainNav>
      </Bar>
    );
  }
}

Navbar.propTypes = {
  displayNav: PropTypes.bool,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
};

export default withTranslation()(Navbar);
