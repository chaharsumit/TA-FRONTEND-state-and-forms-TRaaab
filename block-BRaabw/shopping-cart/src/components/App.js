import React from 'react';
import data from '../data.json';
import Aside from './Aside';
import Header from './Header';
import Products from './Products';

let allProducts = data.products;
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      size: [],
      select: "",
    }
  }

  Sizes = () => {
    let availSizes = allProducts.reduce((acc, curr) => {
      acc = acc.concat(curr.availableSizes);
      return acc;
    }, []);
    availSizes = [...new Set(availSizes)];
    return availSizes;
  }

  deleteSize = (chosenSize) => {
    let sizeArr = this.state.size;
    let pos = sizeArr.indexOf(chosenSize);
    sizeArr.splice(pos, 1);
    this.setState({
      size: sizeArr
    });
  }

  addSize = (chosenSize) => {
    this.setState({
      size: this.state.size.concat(chosenSize)
    });
  }

  handleSize = (event) => {
    let chosenSize = event.target.innerText;
    if(!this.state.size.includes(chosenSize)){
      this.addSize(chosenSize);
    }else{
      this.deleteSize(chosenSize);
    }
  }

  handleSelect = (event) => {
    this.setState({
      select: event.target.value
    })
  }

  filterSize = () => {
    let filteredProducts = [];
    
    if(this.state.size.length === 0){
      return filteredProducts = [...allProducts];
    }else{
      this.state.size.forEach(size => {
        allProducts.forEach(product => {
          if(product.availableSizes.includes(size)){
            filteredProducts.push(product);
          }
        });
      })
      filteredProducts = [...new Set(filteredProducts)];
      return filteredProducts;
    }
  } 
  
  filterSelect = (filteredProducts) => {
    let arr = [...filteredProducts];

    if(this.state.select === 'Highest'){
      arr = arr.sort((a, b) => b.price - a.price);
      return arr;
    }else if(this.state.select === "Lowest"){
      arr = arr.sort((a, b) => a.price - b.price);
      return arr;
    }else if(!this.state.select){
      return filteredProducts;
    }
  }


  sendProducts = () => {
    let result = [];
    if(this.state.size.length === 0 && !this.state.select){
      result = allProducts;
    }else{
      let filter_select = this.filterSelect(this.filterSize());
      result = filter_select;
    }
    return result;
  }

  render(){
    let allSizes = this.Sizes();
    let products = this.sendProducts();
    /*call sendPro here*/
    return (
      <div className='container flex'>
        <Aside handleSize={this.handleSize} sizes={allSizes} />
        <div className='main'>
          <Header handleSelect={this.handleSelect} total={products} />
          <Products productList={products} />
        </div>
      </div>
    )
  }
}

export default App;