import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

const CLOUDINARY_UPLOAD_PRESET = 'l7mlj2bt'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/tmlthesis/upload'

 class ImageUpload extends Component {


  onImageDrop(files){
    handleImageUpload(files)
  }

  render(){
    return(
      <Dropzone multiple={false} accept='image/*' onDrop={this.onImageDrop.bind(this)}>
        <p>Drag and drop an image or select a file to upload.</p>
      </Dropzone>
        )
  }


 }
