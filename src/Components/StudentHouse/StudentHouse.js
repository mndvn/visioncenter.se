import React from 'react';
import './StudentHouse.css';
import Slider1 from '../../Assests/Stdboende/Slider1.jpg';
import Slider2 from '../../Assests/Stdboende/Slider2.jpg';
import Slider3 from '../../Assests/Stdboende/Slider3.jpg';
import stdboende from '../../Assests/Stdboende/stdboende.jpg';

const StudentHouse = () => (
  <div className="container">
    <h2 className="container">Stödboende</h2>
    <img className="shadow-box img-fluid" src={stdboende} alt="Third slide" />

    <div className="row">
      <div id="myCarousel" className="container col-lg-6 carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
          <li data-target="#myCarousel" data-slide-to="3" />
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="shadow-box img-fluid first-slide" src={Slider1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="img-fluid second-slide" src={Slider2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="img-fluid third-slide" src={Slider3} alt="Third slide" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="col-xl-6">
        <p className="text-center centerize">
          <strong>Kontakt: </strong> Dervis Dennis Aksay <br />
          Telefon: 0722900965
          <br />
          E-Post: <a href="mailto:sweden@visioncenter.se">sweden@visioncenter.se</a>
        </p>
      </div>
    </div>
  </div>
);

export default StudentHouse;
