import React, { useState, useEffect } from "react";
import "./photos.css";
function Photos() {
  const [photos, setPhotos] = useState([]);
  const filteredPhotos = photos.slice(0, 20);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="contenedor">
      {photos.length > 0 && (
        <div className="cardsImgs">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="photo-item">
              <img src={photo.url} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Photos;
