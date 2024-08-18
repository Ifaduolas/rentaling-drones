import React, { useState, useEffect } from 'react';
import DroneCard from "../components/DroneCard"; 
import './Home.css'; 

const Home = () => {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setDrones([
      {
        id: 1,
        name: 'DJI Phantom 4',
        description: 'A powerful drone with excellent camera capabilities.',
        pricePerDay: 25000,
        available: true,
        image:"https://i.ebayimg.com/images/g/CFsAAOSwE-hmoif1/s-l1600.webp",
      },
      {
        id: 2,
        name: 'Mavic Air 2',
        description: 'Compact drone with impressive features and performance.',
        pricePerDay: 20000,
        available: false,
        image: 'https://cdn.vox-cdn.com/thumbor/ttwNvqvON89HLjE8EJhAtxbUmUM=/0x0:2040x1360/1200x628/filters:focal(1035x813:1036x814)/cdn.vox-cdn.com/uploads/chorus_asset/file/19936404/vpavic_042029_4003_0171.jpg',
      },
      {
        id: 3,
        name: 'Parrot Anafi',
        description: 'Lightweight drone with 4K HDR video and 180° tilt gimbal.',
        pricePerDay: 22000,
        available: true,
        image: 'https://megadron.pl/hpeciai/0a26aefc37b364cc580402975a7025b3/eng_pl_Parrot-Anafi-USA-SE-drone-with-thermal-imaging-and-zoom-27226_1.webp',
      },
      {
          id: 4,
          name: 'F7GB2 Drone',
          description: '4k Camera, 9800FT Transmission Range, 2 batteries (NEW).',
          pricePerDay: 30000,
          available: true,
          image: "https://i.ebayimg.com/images/g/9D8AAOSwfetlbOFm/s-l960.webp",
        },
        {
          id: 5,
          name: '15kg payload',
          description: '15kg payload sprayer drones with hd camera and gps.',
          pricePerDay:35000,
          available: true,
          image: 'https://image.made-in-china.com/44f3j00yHFaeOWqyvkb/15kg-Big-Payload-Unmanned-Aerial-Vehicle-uav-Drone-with-Various-Camera-Payloads.webp',
        },
        {
          id: 6,
          name: 'Autel Robotics',
          description: 'EVO Max 4T Fly More Bundle 8K Thermal 20KM FCC Four Lenses.',
          pricePerDay: 40000,
          available: true,
          image: 'https://i.ebayimg.com/images/g/NBkAAOSwrV9lsi0k/s-l960.webp',
        },
        {
          id: 7,
          name: 'DJI Avata 2 ',
          description: 'Fly More Combo FPV Drone 4K Propeller Guard Easy Flip Roll Motion 3.',
          pricePerDay: 25000,
          available: true,
          image: 'https://i.ebayimg.com/images/g/tgIAAOSwBNhmPO66/s-l1600.webp',
        },
        {
          id: 8,
          name: 'SwellPro Splash',
          description: 'Drone 4 Waterproof Drone Quadcopter Load 2KG Standard Version-.',
          pricePerDay: 50000,
          available: true,
          image: 'https://i.ebayimg.com/images/g/agUAAOSws99hMCR-/s-l1600.webp',
        },
    ]);
  }, []);

  return (
    <div className="home-container">
      <header>
        <h1 className="title">Welcome to Drone Rental Service</h1>
        <p className="title-p">Choose from our wide selection of drones for rent.</p>
      </header>
      <div className="drone-list">
        {drones.map(drone => (
          <DroneCard key={drone.id} drone={drone} />
        ))}
      </div>
    </div>
  );
};

export default Home;
