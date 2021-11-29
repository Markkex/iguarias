import React from "react";

const Location = () => {
  return (
    <div className="location">
      <h1 className="titlelocation">Or...</h1>
      <h1 className="locationtext">You can come visit us at:</h1>
      <iframe
        title="iguarias location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.087135698507!2d-7.74883418442194!3d37.05540666099108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd10013b15ecc349%3A0xbaa24384b014ab85!2sIguarias%20da%20Vila!5e0!3m2!1spt-PT!2spt!4v1638099214040!5m2!1spt-PT!2spt"
        width="100%"
        height="450"
        loading="lazy"
        allowFullScreen
        style={{ border: 0 }}
      />
    </div>
  );
};

export default Location;
