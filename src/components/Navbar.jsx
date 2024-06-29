import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../App.css'
// import sun from '../assets/sun-svgrepo-com.svg';
// import moon from '../assets/moon-svgrepo-com.svg';
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
`

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
`

const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
` 

const NavLink = styled.a`
  color: var(--text-color);
  text-decoration-color: var(--primary-color);
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 15px 10px auto;

  &:hover {
    transform: translate(0, 2px);
  }
`

const Title = styled.h1`
  line-height: 1;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 1em;
`


// const NavBarToggle = styled.span`
//   position: absolute;
//   top: 10px;
//   right: 20px;
//   cursor: pointer; 
//   color: rgba(255,255,255,0.8);
//   font-size: 24px;
// `
// const Hamburger = styled.img`
//   content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMklEQVR4nO3aPU4DMRCGYUuhgZJU/JSEkiwtERULXCDcASQirsE1wm0ioeQWQEcq6HjRaFPR0PBJY/Z7pOnH47VXHrsUMzMzMzMzs18B18ATsACek8Rik9NlUQIegC/yitxmqsEPgU/yixx3FQVoqUerKEBDPU4UBdgCluQXm+LgzwsQgFHyIsTgj4oSMADGwBS4SRLTTU6amTczM+sAh8Ad8JgsIqeDogRcAWvyWsuOxMAO8EZ+L8C2ogDn1GOiKMCEepyplsArfV0CITYY4J28IreLogTsA7cJfns/I3Lakw7ezMz6jq493iRsijbypihwDKzIK1r2I+XMr8hvKfkSgFPqMVYUoKXnl6PDSq7HPyTX4yEeH1TwQOK+KNEdiecJn8jM5UdhMzMzMzMzK//DN5h1UDYzOEebAAAAAElFTkSuQmCC');
  
//   @media (min-width: 768px) {
//     display: none;
//   }
// `

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {displayNav: (props.displayNav ? 'flex' : 'none')};
    // this.icon = (icon === sun) ? icon = sun : moon;
  }
  
  // toggleNavBar() {
  //   this.setState((prevState, props) => {
  //     switch(prevState.displayNav) {
  //       case 'none':
  //         return { displayNav: 'flex'};          
  //       case 'flex':
  //       default:
  //         return { displayNav: 'none'}          
  //     }
  //   })
  // }

  render() {
    return (
    <Bar>
      {/* <NavBarToggle onClick={() => this.toggleNavBar()}>
        <Hamburger />
      </NavBarToggle> */}
      <Title href="/">
        João Paulo
        <ThemeToggleButton />
        {/* <img width='25px' src={this.icon} alt='lightmod' onClick={() => this.toggleTheme()} /> */}
      </Title>

      <MainNav display={this.state.displayNav}>
          <NavLi>
              <NavLink href="#about" >Home</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="#portfolio" >Projects</NavLink>
          </NavLi>
          <NavLi>
              <NavLink href="#contacts" >About</NavLink>
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