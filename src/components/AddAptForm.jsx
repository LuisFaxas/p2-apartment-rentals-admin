import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function NewItemForm({ show, handleClose, addItem }) {
    const [newItem, setNewItem] = useState({
        id: 0,
        country: '',
        city: '',
        neighbourhood: '',
        name: '',
        space: '',
        description: '',
        house_rules: '',
        host_name: '',
        host_since: '',
        host_response_time: '',
        property_type: '',
        room_type: '',
        accommodates: 0,
        bathrooms: 0,
        bedrooms: 0,
        beds: 0,
        price: 0,
        cleaning_fee: 0,
        review_scores_rating: 0,
        cancellation_policy: '',
        picture_url: { url: ''}
    });

    const handleChange = (e) => {
        setNewItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        setNewItem((prev) => ({ ...prev, ['id']:  Number(Math.round(Math.random() * 1e12))}))
    }

    const handleNumberChange = (e) => {
        setNewItem((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));
        setNewItem((prev) => ({ ...prev, ['id']:  Number(Math.round(Math.random() * 1e12))}))
    }
    

    const pictureChange = (e) => {
        setNewItem((prev) => ({...prev, ['picture_url']: {['url']: e.target.value}}))
        setNewItem((prev) => ({ ...prev, ['id']:  Number(Math.round(Math.random() * 1e12))}))
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(newItem);
        setNewItem({
            id: '',
            country: '',
            city: '',
            neighbourhood: '',
            name: '',
            space: '',
            description: '',
            house_rules: '',
            host_name: '',
            host_since: '',
            host_response_time: '',
            property_type: '',
            room_type: '',
            accommodates: '',
            bathrooms: '',
            bedrooms: '',
            beds: '',
            price: '',
            cleaning_fee: '',
            review_scores_rating: '',
            cancellation_policy: '',
            picture_url: { url: ''}
        });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='item-form' onSubmit={handleSubmit}>
                    {/* <label>
                        ID:
                        <input type="text" name="id" value={newItem.id} onChange={handleChange} />
                    </label> */}
                    <label>
                        Country:
                        <input type="text" name="country" value={newItem.country} onChange={handleChange} />
                    </label>
                    <label>
                        City:
                        <input type="text" name="city" value={newItem.city} onChange={handleChange} />
                    </label>
                    <label>
                        Neighbourhood:
                        <input type="text" name="neighbourhood" value={newItem.neighbourhood} onChange={handleChange} />
                    </label>
                    <label>
                        Name:
                        <input type="text" name="name" value={newItem.name} onChange={handleChange} />
                    </label>
                    <label>
                        Space:
                        <input type="text" name="space" value={newItem.space} onChange={handleChange} />
                    </label>
                    <label>
                        Description:
                        <input type="text" name="description" value={newItem.description} onChange={handleChange} />
                    </label>
                    <label>
                        House Rules:
                        <input type="text" name="house_rules" value={newItem.house_rules} onChange={handleChange} />
                    </label>
                    <label>
                        Host Name:
                        <input type="text" name="host_name" value={newItem.host_name} onChange={handleChange} />
                    </label>
                    <label>
                        Host Since:
                        <input type="text" name="host_since" value={newItem.host_since} onChange={handleChange} />
                    </label>
                    <label>
                        Host Response Time:
                        <input type="text" name="host_response_time" value={newItem.host_response_time} onChange={handleChange} />
                    </label>
                    <label>
                        Property Type:
                        <input type="text" name="property_type" value={newItem.property_type} onChange={handleChange} />
                    </label>
                    <label>
                        Room Type:
                        <input type="text" name="room_type" value={newItem.room_type} onChange={handleChange} />
                    </label>
                    <label>
                        Accommodates:
                        <input type="number" name="accommodates" value={newItem.accommodates} onChange={handleNumberChange} />
                    </label>
                    <label>
                        Bathrooms:
                        <input type="number" name="bathrooms" value={newItem.bathrooms} onChange={handleNumberChange} />
                    </label>
                    <label>
                        Bedrooms:
                        <input type="number" name="bedrooms" value={newItem.bedrooms} onChange={handleNumberChange} />
                    </label>
                    <label>
                        Beds:
                        <input type="text" name="beds" value={newItem.beds} onChange={handleChange} />
                    </label>
                    <label>
                        Price:
                        <input type="text" name="price" value={newItem.price} onChange={handleChange} />
                    </label>
                    <label>
                        Cleaning Fee:
                        <input type="text" name="cleaning_fee" value={newItem.cleaning_fee} onChange={handleChange} />
                    </label>
                    <label>
                        Review Scores Rating:
                        <input type="text" name="review_scores_rating" value={newItem.review_scores_rating} onChange={handleChange} />
                    </label>
                    <label>
                        Cancellation Policy:
                        <input type="text" name="cancellation_policy" value={newItem.cancellation_policy} onChange={handleChange} />
                    </label>
                    <label>
                        Picture URL:
                        <input type="text" name="picture_url.url" value={newItem.picture_url.url} onChange={pictureChange} required />
                    </label>
                    {/* <label>
                        Thumbnail:
                        <input type="checkbox" name="picture_url.thumbnail" checked={newItem.picture_url.thumbnail} onChange={handleChange} />
                    </label> */}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewItemForm;
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
