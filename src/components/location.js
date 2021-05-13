import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.3452846989126!2d-81.04246918491314!3d35.07310458034053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885691cf9fd517a7%3A0x4f210ae0d082a56e!2sThe%20Palisades%20Sports%20Complex!5e0!3m2!1sen!2sus!4v1620912190544!5m2!1sen!2sus"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
