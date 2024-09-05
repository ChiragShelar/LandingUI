import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SeatPrice.css'; // Create this CSS file for styles
import GreenTick from '../../assets/greentick.png'; // Assuming green tick is stored as greentick.png

const SeatPriceComponent = () => {
    const [seatData, setSeatData] = useState([]);
  
    useEffect(() => {
      // Fetch data from the API
      axios.get('https://viaje.ai/seatinfo_api/')
        .then(response => {
          setSeatData(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching seat data:', error);
        });
    }, []);
  
    return (
      <div className="seat-price-container">
        {/* Left Section */}
        <div className="info-section">
          <h2>Get the Seat price</h2>
          <p className='info-section-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <div className="info-items">
            <div className="info-item">
              <img src={GreenTick} alt="Green Tick" className="tick-icon" />
              <div>
                <h4>World class</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              </div>
            </div>
            <div className="info-item">
              <img src={GreenTick} alt="Green Tick" className="tick-icon" />
              <div>
                <h4>Affordable</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              </div>
            </div>
          </div>
          <button className="learn-more-btn">Learn more</button>
        </div>
  
        {/* Right Section: Scrollable Table */}
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>SEAT</th>
                <th>PRICE</th>
                <th>STATUS</th>
              </tr>
            </thead>
          </table>
          <div className="table-body">
            <table>
              <tbody>
                {seatData.map((seat, index) => (
                  <tr key={index}>
                    <td>{seat.seat_no}</td>
                    <td>{seat.price}</td>
                    <td>{seat.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default SeatPriceComponent;