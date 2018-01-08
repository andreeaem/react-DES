import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import AnotherComponent from './AnotherComponent.jsx';
import Button from './ThirdComponent.jsx';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';

const divStyle =  {
  border: '5px solid pink'
}


const MySideNav = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>
            <Nav id='dashboard'>
                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
                <NavText> Dashboard </NavText>
            </Nav>
            <Nav id='sales'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> Sales </NavText>
            </Nav>
        </SideNav>
    </div>
)

class App extends React.Component {
  render () {
    return (
      <div style={divStyle}>
        <MySideNav></MySideNav>
        <p style={{border:'3px solid #42f4f1'}}> Hello React!</p>
        <AwesomeComponent/>
        <AnotherComponent style={{border:'3px solid #42f4f1'}} greetTarget="userName"/>
        <Button behavior="submit">SEND</Button>
        <Button>yo</Button>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
