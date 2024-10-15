import React from 'react'
import Connect from './Connect'
import Info from './Info'
import './Wrapper.css'

export default function Wrapper() {
  return (
    <div className="content">
        <Connect/>
        <Info/>
    </div>
)
}
