import React from 'react'
import '../CSS/FilterByCollection.css'


export default function FilterByCollection() {

  const collections = [
    'Am:Pm',
    'Bahaar',
    'Dastaan',
    'Dastoor',
    'IDA',
    'Kaftan Edit',
    'Khayal',
    'Magic Hour',
    'Masakali',
    'Meraki',
    'Naaz',
    'Nazariya',
    'Ramo 2023',
    'Rozana',
    'Rozana 2.0',
    'Serene',
    'Shaam',
    'Tyohaar',
    'Udaan'
  ]

  return (
    <ul class="collection-filter">

    {collections.map((collection, i) => {
      return (
        <li key={i} class="list-item">
          <a href="#">
            <span>{collection}</span>
          </a>
        </li>
      )
    })}
</ul>  )
}
