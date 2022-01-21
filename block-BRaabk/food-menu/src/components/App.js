import React from 'react';
import Header from './Header';
import Menu from './Menu';

/*
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: 'all'
    }
  }

  handleClick = (category) => {
    this.setState({
      active: category
    })
  }

  render(){
    let categories = ['all', 'breakfast', 'lunch', 'shakes'];
    let foodItems = (this.state.active === "all" ? data : data.filter(item => item.category === this.state.active));
    return (
      <>
        <Header />
        <div className='container flex'>
          <nav>
            <ul className='menu-nav'>
              {
                categories.map(category => (
                  <li key={category} className={this.state.active === category ? "active" : "" } onClick={() => this.handleClick(category)}>{category}</li>
                ))
              }
            </ul>
          </nav>
          <section className='menu-items-container flex'>
            {
              foodItems.map(item => (
                <article key={item.id} className='food-card flex'>
                  <div className='image-container'>
                    <img alt='image'/>
                  </div>
                  <div className='description-box flex'>
                    <div className='heading-container flex'> 
                      <h3>{item.title}</h3>
                      <h3 className='price'>{item.price}</h3>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))
            }
          </section>
        </div>
      </>
    )
  }
}
*/

function App(){
  return (
    <>
      <Header />
      <Menu />
    </>
  )
}

export default App;