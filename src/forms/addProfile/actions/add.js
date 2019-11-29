import axios from "axios";
// import ActionTypes from '../constants/actionTypes';

export default function add  (data) {  
  console.log("postDataProfile", data);
  return ({
  type: "postDataProfile",
  payload: axios
    .post(
      "/",
      {
        data
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Target-URL": "badid"
        }
      }
    )
    .then(response => console.log(response))
})
};
