// import styles from './styles.css'
import React from 'react'
import { Audio } from 'react-loader-spinner'
import { Searchbar } from './Searchbar/Searchbar'
import {ImageGallery} from './ImageGallery/ImageGallery'
import * as API from '../services/api'

// import { render } from '@testing-library/react'

export class App extends React.Component {
  state = {
    imagesSearch: [],
    isLoading: false
  }
  
   
  addMaterial = async (values) => {
    try {
      this.setState({ isLoading: true })
      const material = await API.addMaterial(values)
      this.setState(state => ({
        imagesSearch: material,
        isLoading: false
      }))
    }
    catch (error) {
      console.log(error)
    }
  }
   
  


  render() {
    
    return (
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
      {this.state.isLoading && <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />}
      <ImageGallery
        item={this.state.imagesSearch}
      />
    </div>
  );
  
  }
  
};

