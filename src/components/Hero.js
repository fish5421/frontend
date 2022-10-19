import React, {useState, useEffect} from "react";
import banana from "../images/banana.webp";
import gallery from "../images/gallery.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm, faHouse } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";



const BASE_URL = 'http://104.131.4.58:8000/'


function Hero() {

  const hiddenFileInput = React.useRef(null);
  const [imageurl, setImageurl] = useState("");
  const [ripe, setRipe] = useState("");




  const handleClick = event => {
    
    hiddenFileInput.current.click();
  };
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
      if (e.target.files[0]) {
          const image = e.target.files[0];
          setImage(image);
      }
  }

  const handleUpload = (e) => {
    e?.preventDefault();


    const formData = new FormData();
    formData.append('image', image)


    const requestOption = {
        method: 'POST',
        body: formData
    }


    // axios.post(BASE_URL + 'api/image', formData, requestOption).then(res => {
    //   console.log(res.data.data)
    //   setImageurl(res.data.data)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
    // .finally(() => {
    //   setImageurl(null)
    // });
    // .then((data) => {
    //   window.location.reload();
    //   window.scrollTo(0, 0);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    // .finally(() => {
    //   setImageurl(null);
    // });


    fetch(BASE_URL + 'api/image', requestOption)
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            console.log(json.data.path);
            console.log(json.data.class);
            setImageurl(BASE_URL + json.data.path);
            setRipe(json.data.class);
            console.log(imageurl);
          });
          // return response.json;
        }
        throw response;
        // const data = response.dat
      })
      .then((data) => {
        window.location.reload();
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setImageurl(null);
      });

}
  return (
    <div class="-my-28 h-1/2 ">
      <div class="flex space-x-1">
        <div class="mt-40 w-1/3 h-1/3">
          <img class="object-scale-down" src={banana} alt="banana" />
        </div>
        <div class="w-1/3 h-1/3 mt-14 mr-20">
          <h1 class="text-center text-xl font-semibold ">Is my Banana Ripe?</h1>
          <img src={gallery} alt="gallery" />
          <div class="flex flex-col justify-center">
          <React.Fragment>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              id="fileInput"
            />

              <button
                class=" text-center shadow-md bg-blue-600 text-white active:bg-blue-600 font-bold uppercase text-xs pl-4 pr-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                variant="contained"
                component="span"
                onClick={handleUpload}
              >
               
                <FontAwesomeIcon icon={faPhotoFilm} /> Upload{" "}
              </button>
              </React.Fragment>
              
          </div>
          <img src={imageurl} alt = "" width="750px" />
          <h2 class = "uppercase mt-10 sm:-mx-10 md:-mx-20 lg:mx-40 text-center font-sans font-medium text-xl text-slate-200 bg-slate-700">{ripe}</h2>
          <h1 class="text-center mt-20 text-lg font-semibold">
            Let's Talk Product
          </h1>
          <p class="text-center text-base">
            There are so many little things that make life a bit easier to manage day-to-day. We
            wanted to develop a solution for a problem of knowing if a banana was ripe or not. If you would like to get more 
            information when additional services become available or you have any feedback please sign-up below and get in-touch. {" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
