import React from 'react'
import './CSS/Wrapper.css'
import Filter from './Filter/Filter'
import Display from './Display'

export default function Wrapper() {
  return (
    <div className='content' style={{marginTop:'25vh'}}>
        <div className='row'>
            <Filter/>
            <Display/>
        </div>
    </div>
  )
}
