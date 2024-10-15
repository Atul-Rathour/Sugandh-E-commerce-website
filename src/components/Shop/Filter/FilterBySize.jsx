import React from 'react'
import '../CSS/FilterBySize.css'


export default function FilterBySize() {

  const sizes = [
    'Free size',
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    'XXXL'
  ]

  return (
    <ul class="size-filter">

    {sizes.map((size, i) =>(
      <li key={i} class="list-item">
        <a href="#">
            <span>{size}</span>
        </a>
      </li>
    ))}

</ul>  )
}
