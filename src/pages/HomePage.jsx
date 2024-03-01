// src/pages/HomePage.jsx
import listings from "../data/data.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(listings.results);
  }, []);

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  return (
    <div className="listingCards">
      {data.map((item) => (
        <div key={item.id}>
        <Link to={`/item/${item.id}`} className="card-link">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={`${item.picture_url.url}`}
              className="card-img-top"
              alt="..."
            />

            {item.picture_url.thumbnail ? (
              <p className="status-icon"> ✅</p>
            ) : (
              <p className="status-icon">❌</p>
            )}

            <div className="card-body">
              <p className="card-title"> {item.name.toUpperCase()} </p>
              <p className="card-city">
                {" "}
                {item.city}, {item.country}{" "}
              </p>
              <p className="card-space">
                {item.bedrooms} Rooms, {item.bathrooms} Baths, {item.beds} Beds{" "}
              </p>
              <p className="card-price"> ${item.price} per night </p>
              <button
                className="delete-button"
                onClick={(e) => {e.preventDefault(); handleDelete(item.id);}}
              >
                Delete
              </button>
            </div>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;

/* {
  "id": "6221624",
  "country": "Spain",
  "city": "Madrid",
  "neighbourhood": null,
  "name": "Marzo Best Offer Madrid PUERTA DEL SOL LM7",
  "space": "Perfecta ubicaci\u00f3n para conocer toda la oferta cultural que ofrece Madrid (Museo del Prado, Museo Thyssen-Bornemisza, Museo Reina Sof\u00eda, Palacio Real\u2026) y pasear por la Gran V\u00eda, e incluso ver alguno de los fant\u00e1sticos espect\u00e1culos de sus teatros y cines. Adem\u00e1s, est\u00e1 muy cerca del Parque del Retiro, pulm\u00f3n de la capital, en el cual puede pasar un rato agradable disfrutando de sus terrazas, dando una vuelta en barca por su estanque, tomando el sol, disfrutar los patines o en bicicleta. Piso recientemente reformado y decorado por un prestigioso equipo de interiorismo, cuenta con dos habitaciones c\u00f3modas, cocina independiente y ba\u00f1o. La casa es realmente acogedora, la hemos decorado con todo nuestro cari\u00f1o para que sea como un peque\u00f1o para\u00edso donde nuestros hu\u00e9spedes puedan relajarse y sentirse como en casa.",
  "description": "Ubicado en estupenda calle situada en una de las zonas m\u00e1s elegantes de la ciudad, cerca de la Plaza de la Cibeles, uno de los monumentos m\u00e1s importantes de Madrid, y a pasos de la Puerta del Sol, la Plaza Mayor, la Gran V\u00eda, y Retiro Aire Acondicionado reci\u00e9n instalado Perfecta ubicaci\u00f3n para conocer toda la oferta cultural que ofrece Madrid (Museo del Prado, Museo Thyssen-Bornemisza, Museo Reina Sof\u00eda, Palacio Real\u2026) y pasear por la Gran V\u00eda, e incluso ver alguno de los fant\u00e1sticos espect\u00e1culos de sus teatros y cines. Adem\u00e1s, est\u00e1 muy cerca del Parque del Retiro, pulm\u00f3n de la capital, en el cual puede pasar un rato agradable disfrutando de sus terrazas, dando una vuelta en barca por su estanque, tomando el sol, disfrutar los patines o en bicicleta. Piso recientemente reformado y decorado por un prestigioso equipo de interiorismo, cuenta con dos habitaciones c\u00f3modas, cocina independiente y ba\u00f1o. La casa es realmente acogedora, la hemos decorado con todo nuestro cari\u00f1o para que sea com",
  "house_rules": "El apartamento se ha realizado con mucho cari\u00f1o para que tu estancia en \u00e9l sea muy agradable ES OBLIGATORIO PRESENTAR DOCUMENTACI\u00d3N OFICIAL DE TODOS LOS OCUPANTES El horario de entrada ser\u00e1 desde las 15h a las 21h. A partir de las 21h se cobrar\u00e1 un suplemento de 30\u20ac, que se abonar\u00e1 a la llegada a la entrega de las llaves. Entrar antes de las 15h puede conllevar un suplemento El horario de salida ser\u00e1 antes de las 11h, si deseas abandonar el apartamento m\u00e1s tarde deber\u00e1s solicitarlo con antelaci\u00f3n y en base a la disponibilidad estaremos encantados de ayudarte. Puede conllevar un suplemento Recuerda que el apartamento debe ser devuelto en las mismas condiciones de orden y limpieza que a tu llegada Ruego que saques la basura todos los d\u00edas, con especial cuidado en los meses de verano Es importante respetar el n\u00famero de personas que ocupar\u00e1n el apartamento, cuyo n\u00famero nunca debe de sobrepasar el estipulado en la reserva. En caso contrario se pedir\u00e1 al cliente el desalojo inmediato del apa",
  "host_name": "Leticia&Fer",
  "host_since": "2015-02-10",
  "host_response_time": "within an hour",
  "property_type": "Apartment",
  "room_type": "Entire home/apt",
  "accommodates": 6,
  "bathrooms": 1.0,
  "bedrooms": 2,
  "beds": 3,
  "price": 84,
  "cleaning_fee": 50,
  "review_scores_rating": 84,
  "cancellation_policy": "strict",
  "picture_url": {
    "thumbnail": true,
    "filename": "d5fab639-a9e3-463a-af92-a408f8cc2d5e.jpg",
    "format": "JPEG",
    "width": 720,
    "mimetype": "image/jpeg",
    "etag": "\"bc12d7f5acdd0dac7a1fe9af77b6b66a5310dec1\"",
    "id": "9a1168a0abcb0aca0512010b156ac61e",
    "last_synchronized": "2020-08-04T00:39:36.985953",
    "color_summary": [
      "rgba(225, 210, 195, 1.00)",
      "rgba(211, 189, 164, 1.00)",
      "rgba(188, 159, 128, 1.00)"
    ],
    "height": 480,
    "url": ""
  }https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/files/9a1168a0abcb0aca0512010b156ac61e
}, */
