import React,{PureComponent} from 'react'
import {Grid, Image, Card} from 'semantic-ui-react'
import './Web.css'
class Desktop extends PureComponent{
  render() {
    const {vWidth}=this.props
    let nColumns
    if (vWidth>=1274 || (vWidth>=768 && vWidth<992)){
      nColumns=2
    }
    if (vWidth<768 || (vWidth>=992 && vWidth<1274)){
      nColumns=1
    }
    return (
        <Grid centered columns={nColumns} className='Web' style={{backgroundColor:'rgba(34,36,38,.1)',marginTop:'36px'}}>
          <Grid.Column>
            <Card centered raised color='violet'>
              <Image src= '/tank.gif'/>
              <Card.Content style={{marginTop:'5px'}}>
                <Card.Header>
                  Tank
                </Card.Header>
                <Card.Description>
                  A simple tank game written in C++ and using <a className='b' target="_blank" rel="noopener noreferrer" href='https://www.sfml-dev.org'>SFML</a>
                  <br/> Email me if you want the code.
                </Card.Description>
              </Card.Content>
              <Card.Content textAlign='center'>
                <p><a className='a' target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1wlKlB7djVucNbUJZtKwKaKzld6610qXH/view?usp=sharing'>Download the Game</a></p>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card centered raised color='violet'>
              <Image src= '/balls.gif' style={{height:'290px'}}/>
              <Card.Content style={{margin:'5px'}}>
                <Card.Header>
                  Balls
                </Card.Header>
                <Card.Description>
                  Little balls that can draw letters, written in C++ and using <a className='b' target="_blank" rel="noopener noreferrer" href='https://www.sfml-dev.org'>SFML</a>
                  <br/> Email me if you want the code.
                </Card.Description>
              </Card.Content>
              <Card.Content textAlign='center'>
                <p><a className='a' target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1t5V4N1e4bVxDBrHETZrlRYpNyd3JvKhL/view'>Download the Game</a></p>
              </Card.Content>
            </Card>
          </Grid.Column>

        </Grid>
    )
  }
}

export default Desktop
