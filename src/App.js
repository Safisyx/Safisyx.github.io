import React, { Component } from 'react';
import {Menu, Image, Dropdown, Button, Flag} from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Portfolio from './containers/Portfolio'

class App extends Component {
  state = {
    activeItem: 'portfolio',
    vWidth: window.innerWidth
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  componentDidMount =() => {
    window.addEventListener("resize", ()=>{
      this.setState({vWidth:window.innerWidth})
    });
  }

  componentWillUnmount = () =>{
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    const { activeItem, vWidth } = this.state
    return (
      <div className="App">
        <Menu stackable fixed={vWidth<768?null:'top'}>
          <Menu.Item style={{backgroundColor:'lightgrey'}}>
            <Image src='/favicon.png' size='mini'/>
            {
               this.state.vWidth<768 &&
              <span className='myName'>Haingotiana Safidy Nandrianina Ratsimbazafy</span>
            }
          </Menu.Item>
          <Menu.Item
            className = 'myItem'
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          >
            <span>About</span>
          </Menu.Item>

          <Menu.Item
            className='myItem'
            name='portfolio'
            active={activeItem === 'portfolio'}
            onClick={this.handleItemClick}
          >
            <span>Portfolio</span>
          </Menu.Item>
        </Menu >

        {activeItem==='portfolio' &&
          <Portfolio vWidth={vWidth}/>
        }

        <Menu stackable fixed='bottom' borderless style={{backgroundColor:'lightgrey'}}>
          <Menu.Item
            className = {vWidth>=768?null:'footerItem'}>
            <i className='large copyright icon'/><span className='s1' style={{marginRight:'5px'}}>2018</span>
            <span className='s2'>Haingotiana Safidy Nandrianina Ratsimbazafy</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default App;
