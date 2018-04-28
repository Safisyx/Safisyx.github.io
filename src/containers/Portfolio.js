import React,{PureComponent} from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import Web from '../components/Web'
import Desktop from '../components/Desktop'
import './Portfolio.css'
class Portfolio extends PureComponent{
  render() {
    const {vWidth}=this.props
    return (
      <div className='Portfolio' style={{width:'95%', margin:'0 auto',
      marginBottom:vWidth<=520?'70px':'50px',marginTop:(vWidth<768)?'0':'70px'}}>
        <Grid centered doubling columns={2}>
          <Grid.Column>
            <Segment>
              <h2>Web:</h2>
              <Web vWidth={vWidth}/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
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
