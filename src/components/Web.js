import React,{PureComponent} from 'react'
import {Grid, Image, Card} from 'semantic-ui-react'
import './Web.css'
class Web extends PureComponent{
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
        <Grid columns={nColumns} className='Web' style={{backgroundColor:'rgba(34,36,38,0)', marginTop:'36px'}}>
          <Grid.Column>
            <Card centered raised color='violet'>
              <Image src= '/hangman.png'/>
              <Card.Content>
                <Card.Header>
                  Hangman (React/Redux)
                </Card.Header>
                <Card.Meta>
                  <a className='a' target="_blank" rel="noopener noreferrer" href='https://safisyx-hangman.herokuapp.com/'>Deployed</a><span> on </span>
                  <a className='b' target="_blank" rel="noopener noreferrer" href='https://www.heroku.com/'>Heroku</a>
                </Card.Meta>
                <Card.Description>
                  Individual assignment at <a className='b' target="_blank" rel="noopener noreferrer" href='https://www.codaisseur.com'>Codaisseur</a>
                </Card.Description>
              </Card.Content>
              <Card.Content textAlign='center'>
                <p><a className='a' target="_blank" rel="noopener noreferrer" href='https://github.com/Safisyx/Hangman'>View code</a></p>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card centered raised color='violet'>
              <Image src= '/evaluation.png'/>
              <Card.Content>
                <Card.Header>
                  Student Evaluation Tool
                </Card.Header>
                <Card.Description>
                  Final individual project at <a className='b' target="_blank" rel="noopener noreferrer" href='https://www.codaisseur.com'>Codaisseur</a>.
                  <br/>I used React/Redux in the frontend and TypeScript/TypeORM in the backend.
                </Card.Description>
              </Card.Content>
              <Card.Content textAlign='center'>
                <p><a className='a' target="_blank" rel="noopener noreferrer" href='https://github.com/Safisyx/evaluation-client'>View frontend code</a>
                <br/><a className='a' target="_blank" rel="noopener noreferrer" href='https://github.com/Safisyx/student-evaluation-api'>View backend code</a></p>
              </Card.Content>
            </Card>
          </Grid.Column>
     {
        /*  <Grid.Column>
            <Card centered raised color='black'>
              <Image src= '/hangman.png'/>
              <Card.Content>
                <Card.Header>
                  Hangman (React/Redux)
                </Card.Header>
                <Card.Meta>
                  <a className='a' target="_blank" rel="noopener noreferrer" href='https://safisyx-hangman.herokuapp.com/'>Deployed</a><span> on </span>
                  <a className='b' target="_blank" rel="noopener noreferrer" href='https://www.heroku.com/'>Heroku</a>
                </Card.Meta>
                <Card.Description>
                  Individual assignment at <a className='b' target="_blank" rel="noopener noreferrer" href='https://www.codaisseur.com'>Codaisseur</a>
                </Card.Description>
              </Card.Content>
              <Card.Content textAlign='center'>
                <p>See code on <a className='a' target="_blank" rel="noopener noreferrer" href='https://github.com/Safisyx/Hangman'>Github</a></p>
              </Card.Content>
            </Card>
          </Grid.Column>*/}

        </Grid>
    )
  }
}

export default Web
