import { useState } from "react"

const ImageComponent = ({ item }) => {

    const [valid, setValid] = useState(true);

    return (
        <>
            {valid ?
                <img
                    src={`${item.picture_url.url}`}
                    className="card-img-top card-all-images"
                    alt="..."
                    onError={() => setValid(false)}
                />
                :
                <img
                    src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/ironbnb-house.50.png'
                    className="card-img-top card-all-images"
                    alt="..."
                />

            }

            {valid ? 

            <p className="status-icon"> ✅</p>
             : 
            <p className="status-icon">❌</p>
                     
            }
        </>

    )
}

export default ImageComponent