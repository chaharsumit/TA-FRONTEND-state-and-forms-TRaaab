import React from 'react';
import data from '../data';
import People from './People';

class Tags extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: ""
    }
  }
  handleClick = (house) => {
    this.setState({
      active: house
    })
  }
  render(){
    let houseNames = data.map(house => house.name);
    let everyone;
    if(!this.state.active){
      everyone = data.reduce((acc, house) => {
        acc = acc.concat(house.people);
        return acc;
      }, []);
    } else{
      everyone = data.find(house => house.name === this.state.active).people;
    }
    return (
      <>
        <ul className='tagList'>
          {
            houseNames.map(house => (
              <li key={house} className={this.state.active === house ? "active tag-item" : "tag-item"} onClick={() => this.handleClick(house)}>{house}</li>
            ))
          }
        </ul>
        <People everyone={everyone} />
      </>
    );
  }
}

export default Tags;
