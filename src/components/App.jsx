import styles from './styles.css'
import React from 'react'
import { Audio } from 'react-loader-spinner'
import { Searchbar } from './Searchbar/Searchbar'
import {ImageGallery} from './ImageGallery/ImageGallery'
import * as API from '../services/api'
import Button from './Button/Button'


// import { render } from '@testing-library/react'

export class App extends React.Component {
  state = {
    imagesSearch: [],
    isLoading: false,
    showModal: false
  }
  
   
  addMaterial = async (values) => {
    console.log(values)
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

  onLoad = async ( value ) => {
    
    console.log(this.state.imagesSearch)
    console.log(value)

    try {
      const loadImages = await API.addLoad(value)
      this.setState(state => ({
        imagesSearch: [...state.imagesSearch, loadImages]
      }))
    }
    catch (error) {
      console.log(error)
    }
  }
  
  ShowModal = imgId => {
   
    this.setState(state => ({
      showModal: !state.showModal
    }))
  }
   
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      // this.setState(state => ({
      //   showModal: false
      // }))
            this.ShowModal()

    }
  }

  handleClickBackdrop = evt => {
    
    if (evt.currentTarget === evt.target) {
      //  this.setState(state => ({
      //   showModal: false
      // }))
      this.ShowModal()
    }
  }


  render() {
    return (
    <div className={styles.App}
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
          items={this.state.imagesSearch}
          ShowModal={this.ShowModal}
          renderModal={this.state.showModal}
          handleClick={this.handleClickBackdrop}
        />
        {this.state.imagesSearch.length >= 12 &&
          <Button
          onLoad={this.onLoad}
          value={this.state.imagesSearch}
          />}
        
    </div>
  );
  
  }
  
};

