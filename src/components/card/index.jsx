import React from "react";
import "./card.css";

// Import all images
import alexeyBike from "../../assets/alexey-lin-j-0pjgxE1kc-unsplash.jpg";
import dmytroBike from "../../assets/dmytro-nushtaiev-6ZmdajDgjaU-unsplash.jpg";
import erwiBike from "../../assets/erwi-MRrQ_QVyD8I-unsplash.jpg";
import howardBike from "../../assets/howard-bouchevereau-BRDO4C-0h_s-unsplash.jpg";
import lorenzoBike from "../../assets/lorenzo-gerosa-tz9-ifu1JNQ-unsplash.jpg";
import maxBike from "../../assets/max-whitehead-yS8AH4mZ9u4-unsplash.jpg";
import patrickBike from "../../assets/patrick-hendry-qiNK8pKucOs-unsplash.jpg";
import soleBike1 from "../../assets/sole-bicycles-JK6lD_y3aDg-unsplash.jpg";
import soleBike2 from "../../assets/sole-bicycles-zbFU4MM9WGQ-unsplash.jpg";
import stephenBike from "../../assets/stephen-monterroso-6lE8crLmiRc-unsplash.jpg";
import zoltanBike1 from "../../assets/zoltan-tasi--FpHUAptV2Y-unsplash.jpg";
import zoltanBike2 from "../../assets/zoltan-tasi-WwlP3F1VksA-unsplash.jpg";

const Card = ({ image, title, description, price }) => {
  return (
    <div className="feature-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="price">{price}</p>
    </div>
  );
};

const Cards = () => {
  const features = [
    {
      image: alexeyBike,
      title: "Urban Commuter",
      description:
        "Perfect for daily city rides with lightweight frame and comfortable seating.",
      price: "1499 EGP",
    },
    {
      image: dmytroBike,
      title: "Mountain Explorer",
      description:
        "Rugged design with superior suspension for off-road adventures.",
      price: "2999 EGP",
    },
    {
      image: erwiBike,
      title: "Speed Racer",
      description:
        "Aerodynamic frame designed for maximum speed and efficiency.",
      price: "3599 EGP",
    },
    {
      image: howardBike,
      title: "Premium Roadster",
      description:
        "Luxury model with carbon fiber frame and premium components.",
      price: "9999 EGP",
    },
    {
      image: lorenzoBike,
      title: "Vintage Cruiser",
      description:
        "Classic design with modern components for a smooth, stylish ride.",
      price: "1899 EGP",
    },
    {
      image: maxBike,
      title: "City Navigator",
      description:
        "Practical design with integrated storage for urban exploration.",
      price: "1999 EGP",
    },
    {
      image: patrickBike,
      title: "Trail Blazer",
      description:
        "All-terrain bike with enhanced grip tires and durable frame.",
      price: "2599 EGP",
    },
    {
      image: soleBike1,
      title: "Endurance Pro",
      description:
        "Long-distance performance bike with ergonomic design for comfort.",
      price: "5999 EGP",
    },
    {
      image: soleBike2,
      title: "Urban Fixie",
      description: "Minimalist single-speed design for the urban enthusiast.",
      price: "4499 EGP",
    },
    {
      image: stephenBike,
      title: "Elite Performer",
      description:
        "Competition-grade bicycle with cutting-edge technology and materials.",
      price: "8999 EGP",
    },
    {
      image: zoltanBike1,
      title: "Eco Rider",
      description:
        "Environmentally conscious design with sustainable materials.",
      price: "1599 EGP",
    },
    {
      image: zoltanBike2,
      title: "Adventure Seeker",
      description:
        "Versatile all-purpose bike for any terrain or weather condition.",
      price: "7999 EGP",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Product</h2>
          <p>Special Bikes For You.</p>
        </div>
        <div className="cards-container">
          {features.map((feature, index) => (
            <Card
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              price={feature.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
