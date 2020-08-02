import React from "react";

const CreditCard = ({ size = "36", color = "black" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="icon/action/credit_card_24px">
      <path id="icon/action/credit_card_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M30 6H6C4.335 6 3.015 7.335 3.015 9L3 27C3 28.665 4.335 30 6 30H30C31.665 30 33 28.665 33 27V9C33 7.335 31.665 6 30 6ZM30 27H6V18H30V27ZM6 12H30V9H6V12Z" fill={color} />
      </g>
    </svg>
  );
};

export default CreditCard;
