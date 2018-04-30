import React,{PureComponent} from 'react'
import {Grid, Segment, Icon} from 'semantic-ui-react'
import Web from '../components/Web'
import Desktop from '../components/Desktop'
import './Portfolio.css'
class Portfolio extends PureComponent{
  marginbottom = ()=> {
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
    const {vWidth}=this.props
    return (
      <div className='Portfolio' style={{width:'95%', margin:'0 auto',
      paddingBottom:`${this.marginbottom()}`,marginTop:(vWidth<768)?'0':'70px'}}>
        <Grid centered doubling columns={2} style={{width:'100%', margin:'0 auto'}}>
          <Grid.Column>
            <Segment style={{backgroundColor:'rgba(219,112,147,.2)', textAlign:'center'}}>
              <h2>Web:</h2>
              <Web vWidth={vWidth}/>
              <p style={{display:'inline-block', marginTop:'14px', color: 'white',
                 fontSize:'1.5em'}}><Icon name='github'/>More code examples on
                 <a target="_blank" rel="noopener noreferrer" href='https://github.com/Safisyx?tab=repositories'> Github</a></p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment style={{backgroundColor:'rgba(219,112,147,.2)'}}>
              <h2>Desktop:</h2>
              <Desktop vWidth={vWidth}/>
            </Segment>
          </Grid.Column>

        </Grid>
      </div>
    )
  }
}

export default Portfolio
