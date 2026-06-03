const ContactMap = () => {
  return (
    <div className="map-container">
      <iframe
        title="location-map"
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactMap;