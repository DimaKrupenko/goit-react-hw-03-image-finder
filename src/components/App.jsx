// import styles from './styles.css'
import React from 'react'
import { Searchbar } from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import * as API from '../services/api'
// import { render } from '@testing-library/react'

export class App extends React.Component {
  state = {
  imagesSearch: []
  }
  
   addMaterial = async (values) => {
    const material = await API.addMaterial(values)
    this.setState(state => ({imagesSearch: [...state.imagesSearch, material]}))
    // console.log(material)
    // console.log(values)
    // console.log(this.state.imagesSearch)

  }


  render() {
            console.log(this.state.imagesSearch)

  return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar
      onSubmit={this.addMaterial}
      />
      <ImageGallery
      imagesSearch = {this.state.imagesSearch}
      />
    </div>
  );
  
  }
  
};

