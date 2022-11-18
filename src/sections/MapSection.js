import React from 'react'

const MapSection = () => {
  return (
    <iframe 
        className="google-map"
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16460.293469034106!2d14.766933771023139!3d56.88222938642066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46572375ef97a263%3A0x463e65112fbbf5cc!2sEC%20Utbildning%20AB!5e0!3m2!1sen!2sfr!4v1666685902666!5m2!1sen!2sfr" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  )
}

export default MapSection