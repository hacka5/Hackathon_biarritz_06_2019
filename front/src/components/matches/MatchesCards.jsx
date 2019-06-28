import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  Button,
  Fade
} from 'reactstrap';
import './style.matches.css';



class MatchesCards extends Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    };
  
    toggle() {
      this.setState({
          fadeIn: !this.state.fadeIn
      });
  }

  render() {
    
  return (
      <div>
        <Card className='match-card'>
        <p style={{marginTop:30}}>Match date: {this.props.isoDate}</p>
          <CardTitle style={{padding:15, display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            <h2 className='teams'>{this.props.homeTeam}</h2> <p style={{padding:15}}>VS</p>
            <h2 className='teams'>{this.props.awayTeam}</h2>
          </CardTitle>
          <Button color="info" onClick={this.toggle}>The winner is ?</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    {this.props.winnerUid}
                </Fade>
        </Card>
      </div>
  );
  }
}

export default MatchesCards;
