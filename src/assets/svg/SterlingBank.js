import React from 'react'

const SterlingBank = ({ width = "151", height = "47" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 151 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="151" height="47" fill="url(#pattern0123)"/>
    <defs>
    <pattern id="pattern0123" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use href="#image0123" transform="scale(0.00662252 0.0212766)"/>
    </pattern>
    <image id="image0123" width="151" height="47" href="data:image/png;base64,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"/>
    </defs>
    </svg>
  )
}

export default SterlingBank;
