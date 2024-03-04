import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function UpdateForm({ item, show, handleClose, handleUpdate }) {
  const [formData, setFormData] = useState(item);

  useEffect(() => {
    setFormData(item);
  }, [item]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate(formData);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name || ''} onChange={handleInputChange} />
          </Form.Group>
          <Form.Label>Country</Form.Label>
            <Form.Control type="text" name="country" value={formData.country || ''} onChange={handleInputChange} />
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" value={formData.city || ''} onChange={handleInputChange} />
            <Form.Group controlId="formNeighbourhood"></Form.Group>
                <Form.Label>Neighbourhood</Form.Label>
                <Form.Control type="text" name="neighbourhood" value={formData.neighbourhood || ''} onChange={handleInputChange} />
            
            <Form.Group controlId="formSpace">
                <Form.Label>Space</Form.Label>
                <Form.Control as="textarea" rows={3} name="space" value={formData.space || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={5} name="description" value={formData.description || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formHouseRules">
                <Form.Label>House Rules</Form.Label>
                <Form.Control as="textarea" rows={5} name="house_rules" value={formData.house_rules || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formHostName">
                <Form.Label>Host Name</Form.Label>
                <Form.Control type="text" name="host_name" value={formData.host_name || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formHostSince">
                <Form.Label>Host Since</Form.Label>
                <Form.Control type="text" name="host_since" value={formData.host_since || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formHostResponseTime">
                <Form.Label>Host Response Time</Form.Label>
                <Form.Control type="text" name="host_response_time" value={formData.host_response_time || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formPropertyType">
                <Form.Label>Property Type</Form.Label>
                <Form.Control type="text" name="property_type" value={formData.property_type || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formRoomType">
                <Form.Label>Room Type</Form.Label>
                <Form.Control type="text" name="room_type" value={formData.room_type || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formAccommodates">
                <Form.Label>Accommodates</Form.Label>
                <Form.Control type="number" name="accommodates" value={formData.accommodates || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBathrooms">
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control type="number" name="bathrooms" value={formData.bathrooms || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBedrooms">
                <Form.Label>Bedrooms</Form.Label>
                <Form.Control type="number" name="bedrooms" value={formData.bedrooms || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formBeds">
                <Form.Label>Beds</Form.Label>
                <Form.Control type="number" name="beds" value={formData.beds || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" value={formData.price || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formCleaningFee">
                <Form.Label>Cleaning Fee</Form.Label>
                <Form.Control type="number" name="cleaning_fee" value={formData.cleaning_fee || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formReviewScoresRating">
                <Form.Label>Review Scores Rating</Form.Label>
                <Form.Control type="number" name="review_scores_rating" value={formData.review_scores_rating || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formCancellationPolicy">
                <Form.Label>Cancellation Policy</Form.Label>
                <Form.Control type="text" name="cancellation_policy" value={formData.cancellation_policy || ''} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formPictureUrl">
                <Form.Label>Picture URL</Form.Label>
                <Form.Control type="text" name="picture_url" value={formData.picture_url || ''} onChange={handleInputChange} />
            </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default UpdateForm;

/* {
    "total_count": 132,
    "results": [
      {
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
          "url": "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/files/9a1168a0abcb0aca0512010b156ac61e"
        }
      }, */