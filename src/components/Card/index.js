import React from 'react';
import { PropTypes } from 'prop-types';
import "./card.css";

import placeholderMale from "../../assets/images/male-placeholder.jpg";
import placeholderFemale from "../../assets/images/placeholderFemale.jpg";

const Card = ({ image, alt, title, name, placeholder }) => {
  const placeholderImg = placeholder === "female" ? placeholderFemale : placeholderMale;
  return (
    <div className="card">
      <div className="card-img">
        <img src={image || placeholderImg} alt={alt} />
      </div>
      <div className="card-text">
        <div>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;

Card.proptype = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

Card.defaultProps = {
  alt: ""
}