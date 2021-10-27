import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

export default function Gallery({media}){
  return <ImageGallery
    items={media}
    showPlayButton={false}
    showThumbnails={false}
    showIndex
    lazyload
  />
}