import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Products from './Products'

export default function Section(props) {
  return (
    <div className='main-section'>
    <div className='section-items'>
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    <Products text={props.carName} />
    </div>
    <div className='section-items-two'>
    <i class="fa fa-trash" aria-hidden="true"></i>
    <i class="fa-solid fa-pen"></i>
    <i class="fa fa-pencil" aria-hidden="true"></i>
    </div>
   </div>
  )
}
