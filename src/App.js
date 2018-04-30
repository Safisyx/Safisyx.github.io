import React, { Component } from 'react';
import {Menu, Image, Icon} from 'semantic-ui-react'
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

  paddingbottom = ()=> {
    const {vWidth}=this.props
    if (vWidth<362){
      return '89px'
    }
    if (vWidth>=362 && vWidth<526){
      return '68px'
    }
    return '47px'
  }

  render() {
    const { activeItem, vWidth } = this.state
    return (
      <div className="App" style={{paddingBottom:`${this.paddingbottom()}`, paddingTop:vWidth<768?'0':'57px'}}>
        <Menu stackable fixed={vWidth<768?null:'top'} style={{borderColor:'rgb(46,10,36)',backgroundColor:'#7D6987'}}>
          <Menu.Item style={{backgroundColor:'lightgrey'}}>
            <Image src='/favicon.png' size='mini'/>
            {
               this.state.vWidth<768 &&
              <span className='myName'>Haingotiana Safidy Nandrianina Ratsimbazafy</span>
            }
          </Menu.Item>
          <Menu.Item
            style={{borderRadius:'1px'}}
            className = 'myItem'
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          >
            <span>ABOUT</span>
          </Menu.Item>

          <Menu.Item
            style={{borderRadius:'1px'}}
            className='myItem'
            name='portfolio'
            active={activeItem === 'portfolio'}
            onClick={this.handleItemClick}
          >
            <span>PORTFOLIO</span>
          </Menu.Item>
        </Menu >

        {activeItem==='portfolio' &&
          <Portfolio vWidth={vWidth}/>
        }

        <Menu stackable fixed='bottom' borderless style={{backgroundColor:'lightgrey'}}>
          <Menu.Item style={{width:'100%', position:'relative'}}
            className = {vWidth>=768?null:'footerItem'}>
            <i className='large copyright icon'/><span className='s1' style={{marginRight:'5px'}}>2018</span>
            <span className='s2'>Haingotiana Safidy Nandrianina Ratsimbazafy</span>
            {
              vWidth<=768 &&
            <Icon link name='arrow circle up' size='large'
             style={{float:'right', color:'purple', marginRight:'0'}}
             onClick={()=>window.scrollTo(0, 0)}/>
            }
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default App;
