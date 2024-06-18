import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../App.css'

const Bar = styled.nav`
  // background-image: linear-gradient(260deg,  rgb(42,244,152,255) 0%, #3498db 100%); 
  background: transparent;
  padding-bottom: 10px;
  font-size: 20px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`
const MainNav = styled.ul`
  list-style-type: none;
  display: ${ props => props.display };
  flex-direction: column;
  z-index: 9999 !important;

  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    color: #fff;
    position: relative;
    z-index: 999 !important;
    // border: 2px solid #000;
    // background-color: #242424;

    background: rgba(0, 0, 0, 0.7);
    transition: ease-in-out 0s;
    // opacity: 0;
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.12);
  }
`
const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
` 

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  
  &:hover {
    color: var(--primary-color);
    text-decoration: none;
  }

  @media (min-width: 768px) {
    margin: 15px 10px auto;
  }
`
const Title = styled.h1`
  font-size: 48px;
  line-height: 1;
  font-weight: 700;
  font-family: "Poppins", sans-serif;

  color: #fff;
  font-size: 36px;
  margin-top: 20px;
  margin-left: 2em;
`

const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer; 
  color: rgba(255,255,255,0.8);
  font-size: 24px;
`
const Hamburger = styled.img`
  content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMklEQVR4nO3aPU4DMRCGYUuhgZJU/JSEkiwtERULXCDcASQirsE1wm0ioeQWQEcq6HjRaFPR0PBJY/Z7pOnH47VXHrsUMzMzMzMzs18B18ATsACek8Rik9NlUQIegC/yitxmqsEPgU/yixx3FQVoqUerKEBDPU4UBdgCluQXm+LgzwsQgFHyIsTgj4oSMADGwBS4SRLTTU6amTczM+sAh8Ad8JgsIqeDogRcAWvyWsuOxMAO8EZ+L8C2ogDn1GOiKMCEepyplsArfV0CITYY4J28IreLogTsA7cJfns/I3Lakw7ezMz6jq493iRsijbypihwDKzIK1r2I+XMr8hvKfkSgFPqMVYUoKXnl6PDSq7HPyTX4yEeH1TwQOK+KNEdiecJn8jM5UdhMzMzMzMzK//DN5h1UDYzOEebAAAAAElFTkSuQmCC');
  
  @media (min-width: 768px) {
    display: none;
  }
`
class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {displayNav: (props.displayNav ? 'flex' : 'none')};
  }

  toggleNavBar() {
    this.setState((prevState, props) => {
      switch(prevState.displayNav) {
        case 'none':
          return { displayNav: 'flex'};          
        case 'flex':
        default:
          return { displayNav: 'none'}          
      }
    })
  }

  render() {
    return (
    <Bar>
      <NavBarToggle onClick={() => this.toggleNavBar()}>
        <Hamburger />
      </NavBarToggle>
      <Title href="#">João Paulo</Title>
      <MainNav display={this.state.displayNav}>
          <NavLi>
              <NavLink href="/about" >About</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="/portfolio" >Projects</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="/skills" >Skills</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="/contacts" >Contact</NavLink>
          </NavLi>
      </MainNav>
    </Bar>
  )}
}

Navbar.propTypes = {
  // decides if we initially display the navbar open or not
  displayNav: PropTypes.bool,
}

export default Navbar;