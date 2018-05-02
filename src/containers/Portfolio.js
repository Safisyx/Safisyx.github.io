import React,{PureComponent} from 'react'
import {Grid, Segment, Icon} from 'semantic-ui-react'
import Web from '../components/Web'
import Desktop from '../components/Desktop'
import './Portfolio.css'
class Portfolio extends PureComponent{
  render() {
    const {vWidth}=this.props
    return (
        <Grid centered doubling columns={2} style={{width:'99%', margin:'0 auto', paddingTop:'5px'}}>
          <Grid.Column>
            <Segment style={{backgroundColor:'rgba(167,74,138,.3)', textAlign:'center'}}>
              <h2>Web:</h2>
              <Web vWidth={vWidth}/>
              <p style={{display:'inline-block', marginTop:'14px', color: 'white',
                 fontSize:'1.5em'}}><Icon name='github'/>More projects can be found on
                 <a target="_blank" rel="noopener noreferrer" href='https://github.com/Safisyx?tab=repositories'> Github</a></p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment style={{backgroundColor:'rgba(167,74,138,.3)'}}>
              <h2>Desktop:</h2>
              <Desktop vWidth={vWidth}/>
            </Segment>
          </Grid.Column>
        </Grid>
    )
  }
}

export default Portfolio
