import React, { Component } from 'react';
import {Menu, Image, Dropdown, Button} from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

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
    const { activeItem } = this.state
    return (
      <div className="App">
        <Menu stackable>
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
        </Menu>
      </div>
    );
  }
}

export default App;
