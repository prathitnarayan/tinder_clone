import React from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
function TinderCards() {
  
  //Hooks are functions that can be used in React components.
  //They are similar to state and props, but they are not
  const [cars, setCars] = React.useState([
    {
      name: 'Tesla',
      url: 'http://cdn.carbuzz.com/gallery-images/1600/847000/700/847784.jpg'
    },
    {
      name: 'BMW',
      url: 'https://www.topgear.com/sites/default/files/2021/12/1%20BMW%20M3%20xDrive.jpg'
    },
    {
      name: 'Mustang',
      url: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200707011041_Mustang-1.jpg&w=700&q=90&c=1'
    },
    {
        name: 'Lykan',
        url:'https://www.alainclass.com/wp-content/uploads/2017/07/1170-LYKAN-HYPER-RED-7-copy.jpg'
    },
    {
      name:'Porsche',
      url: 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2021/Products/911-gts/Gallery-Driving/P21_0182_a3_rgb.jpeg/jcr:content/P21_0182_a3_rgb.jpeg'

    }

  ]);
  
  
  return (
    <div className='card-container'>
        {
          cars.map( car=> (
              <TinderCard
                className="swipe"
                key={car.name}
                preventSwipe={['up','down']}
              >
                <div 
                style={{backgroundImage: `url(${car.url})`}}
                className='card'
                >
                <h2>
                  {car.name}
                </h2>
                </div>
              </TinderCard>

          ))
        }
    </div>
  )
}

export default TinderCards