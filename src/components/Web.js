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
        <Grid columns={nColumns} className='Web' style={{marginTop:'36px'}}>
          <Grid.Column>
            <Card centered raised color='violet' style={{textAlign:'left', height:'100%'}}>
              <Image src= '/hangman.png'/>
              <Card.Content style={{height:'100%'}}>
                <Card.Header>
                  Hangman
                </Card.Header>
                <Card.Meta>
                  <a className='a' target="_blank" rel="noopener noreferrer" href='https://safisyx-hangman.herokuapp.com/'>Deployed</a><span> on </span>
                  <a className='b' target="_blank" rel="noopener noreferrer" href='https://www.heroku.com/'>Heroku</a>
                </Card.Meta>
                <Card.Description>
                  Individual assignment at <a className='b' target="_blank" rel="noopener noreferrer" href='https://www.codaisseur.com'>Codaisseur</a>. <br/>
                  A frontend app using React/Redux.
                </Card.Description>
              </Card.Content>
              <Card.Content textAlign='center'>
                <p><a className='a' target="_blank" rel="noopener noreferrer" href='https://github.com/Safisyx/Hangman'>View code</a></p>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
              <Card centered raised color='violet' style={{textAlign:'left'}}>
                <Image src= '/dinder.png'/>
                <Card.Content>
                  <Card.Header>
                    Dinder
                  </Card.Header>
                  <Card.Description>
                    Group (4 people) assignment at <a className='b' target="_blank" rel="noopener noreferrer" href='https://www.codaisseur.com'>Codaisseur</a>. <br/>
                    The idea was to create an app like Tinder for dog lovers, using <a className='b' target="_blank" rel="noopener noreferrer" href='https://dog.ceo/dog-api/'>Dog API</a>. <br/>
                    We used React/Redux in the frontend and Express/Sequelize in the backend.
                  </Card.Description>
                </Card.Content>
                <Card.Content textAlign='center'>
                   <p><a className='a' target="_blank" rel="noopener noreferrer" href='https://github.com/Safisyx/dinder-client'>View frontend code</a>
                   <br/><a className='a' target="_blank" rel="noopener noreferrer" href='https://github.com/Safisyx/dinder-server'>View backend code</a></p>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card centered raised color='violet' style={{textAlign:'left', height:'100%'}}>
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

            <Grid.Column>
              <Card centered raised color='violet' style={{textAlign:'left', height:'100%'}}>
                <Image src= '/flexicon.gif'/>
                <Card.Content>
                  <Card.Header>
                    Flexicon Project
                  </Card.Header>
                  <Card.Description>
                    Real world group (5 people) project at <a className='b' target="_blank" rel="noopener noreferrer" href='https://www.codaisseur.com'>Codaisseur</a>.
                    <br/>
                    The aim of the project was to create a website for Flexicon to keep track of customers and orders.
                    <br/>We used React/Redux in the frontend and TypeScript/TypeORM in the backend.
                  </Card.Description>
                </Card.Content>
                <Card.Content textAlign='center'>
                  <p><a className='a' target="_blank" rel="noopener noreferrer" href='https://github.com/Safisyx/frontend_RLP'>View frontend code</a>
                  <br/><a className='a' target="_blank" rel="noopener noreferrer" href='https://github.com/Safisyx/backend_RLP'>View backend code</a></p>
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
