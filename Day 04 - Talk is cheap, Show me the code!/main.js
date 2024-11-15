// Namaste Food APP

/*
Header
    -Logo
    -Nav items
Body
    -Search
    -Restaurant Container
        -Restaurant Card
            -Img
            -Name of Res, Star Rating, cuisine, delivery time
Footer
    -Copyright
    -Address
    -contact
*/

import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.designmantic.com/logo-images/171406.png?company=Company%20Name&keyword=food&slogan=&verify=1"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://images.fineartamerica.com/images/artworkimages/medium/2/chicken-biryani-with-rice-and-spices-india-foodfolio.jpg" />
            <h3>Meghana Foods</h3>  
            <h4>Biryani,North India,Asian</h4>
            <h4>4.3 Stars</h4>
            <h4>38 Minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="s earch">Search</div>
            <div className="res-container">
                <RestaurantCard/>          
            </div>

        </div>
    )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// root.render(heading);
