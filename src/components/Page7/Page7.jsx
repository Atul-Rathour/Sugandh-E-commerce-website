import React, { useRef, useState } from 'react'
import './Page7.css'

export default function Page7() {

    const arr = [
        {
            city : 'flagship',
            head : 'Rudra House',
            body : '1st floor, D-60 Kaliyabid, Bhavangar, Gujarat - 364002.'
        },
        {
            city : 'ahmedabad',
            head : 'House Of Mohini',
            body : 'Shop no.4, Indraprastha Corporate, Opposite to Shell Petrol Pump, Chinar Bungalows, Prahlad Nagar, Ahmedabad, Gujarat-380015.'
        },
        {
            city :'surat',
            head : 'Saanja',
            body : 'Besides Agrawal Vidhya, Vihar School, Canal Rd, Vesu, Surat, Gujarat-395007.'
        },
        {
            city : 'rajkot',
            head : 'House of Shivani',
            body : 'Flat, vidhyakunj society, Business Centrum, 07, main road, Amin Marg, opp. Kings Height, Rajkot, Gujarat-360001.'
        },
        {
            city :'mumbai',
            head : 'Mogra',
            body : 'Flat, vidhyakunj society, Business Centrum, 07, main road, Amin Marg, opp. Kings Height, Rajkot, Gujarat-360001.'
        },
        {
            city :'delhi',
            head : 'House Of Saroj',
            body : 'Shop no. 3, Vasant Vihar, Opposite to Vasant Nagar, New Delhi, Delhi - 110001.'
        },
        {
            city :'kolkata',
            head : 'House Of Rajdhani',
            body : 'Shop no. 12, Rajdhani Complex, Opposite to Rajdhani Park, Kolkata, West Bengal - 700091.'
        },
        {
            city :'chennai',
            head : 'House Of Tamil Nadu',
            body : 'Shop no. 11, Tamil Nadu State Highway, Opposite to Gandhi Nagar, Chennai, Tamil Nadu - 600001.'
        },
        {
            city :'bengaluru',
            head : 'House Of Karnataka',
            body : 'Shop no. 3, Nagarjuna Road, Opposite to Rajiv Gandhi Road, Bengaluru, Karnataka - 560001.'
        }
    ]

    const [head, setHead] = useState(arr[0].head)
    const [body, setBody] = useState(arr[0].body)
    const [CurrentElem, setCurrentElem] = useState(arr[0].city)
    const tabRef = useRef(null)

   
    function changeStyle() {
        const elem = document.querySelector('.items')
        console.log(elem)

    //     elem.map((tabs, index) => {
    //         if(tabs.textContent === CurrentElem) {
    //             tabs.style.backgroundColor = 'black'
    //             tabs.style.color = 'white'
    //         } else {
    //             tabs.style.backgroundColor = 'white'
    //             tabs.style.color = 'black'
    //         }
    // })

        
    }

  return (
    <div id="page7">
    <div className="head">
      <p className="p1">Visit Us</p>
      <p className="p2">We'll love to share the products which our customers has appreceated</p>
    </div>

  

    <div className="list">
        {arr.map((obj, index) => (
            <span className={`items ${obj.city === CurrentElem ? 'selected' : ''}`}
                  onClick={() => {
                    setCurrentElem(obj.city)
                    setHead(obj.head)
                    setBody(obj.body)
                    changeStyle()
                  }}
                  key={index}
                  > {obj.city}</span>


        ))}
     
    </div>

    <div className="address">
      <p id="p1">{head}</p>
      <p id="p2">{body}</p>
    </div>


  </div>  )
}
