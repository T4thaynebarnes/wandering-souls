// Coding Steps:
// Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
// Project must meet the following criteria:
// Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
// Contain at least 10 components
// Allow for all CRUD operations

import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

// const URl_ENDPOINT = "http://localhost:3000/sims";
const URl_ENDPOINT = "https://659effdd5023b02bfe892d70.mockapi.io/sims";

function NewUserForm() {
  const [users, setUser] = useState([]); // State to store user data fetched from the API
  const [newUserName, setNewUserName] = useState(""); // State to store the new user's name
  const [newComment, setNewComment] = useState(""); // State to store the new comment
  const [compressedBase64, setNewFind] = useState(""); // State to store the compressed base64 image data

  // Function to fetch user data from the API
  const getUsers = async () => {
    try {
      const response = await fetch(URl_ENDPOINT);
      if (!response.ok) {
        throw new Error(
          `error with fetch on getUsers() status: ${response.status}`
        );
      }
      const data = await response.json();
      setUser(data);
      console.log("data from the API", data);
      return;
    } catch (error) {
      console.log("error", error);
    }
  };

  // Function to post the new find (image, name, and comment) to the API uses base64 code thanks matthew for showing me that!
  const postFind = async () => {
    try {
      // Get the selected file from the file input with id "image-input"
      const inputFile = document.getElementById("image-input").files[0];
      // Get the textarea with id "base64Code"
      const base64Code = document.querySelector("#base64Code");
      // Create a new FileReader object to read the file content
      const reader = new FileReader();
      // Define what happens when the FileReader loads the file content
      reader.onload = (e) => {
        // Create a new Image object
        const img = new Image();
        // Define what happens when the Image loads
        img.onload = async () => {
          // Create a canvas element
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          // Define maximum dimensions for the image
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 600;

          let width = img.width;
          let height = img.height;
          // Adjust image dimensions if they exceed maximum dimensions
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          // Set canvas dimensions to adjusted image dimensions
          canvas.width = width;
          canvas.height = height;
          // Draw the image onto the canvas with adjusted dimensions
          ctx.drawImage(img, 0, 0, width, height);
          // Convert the canvas content to a base64 encoded JPEG image
          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
          // Set the value of the textarea to the compressed base64 image data
          base64Code.value = compressedBase64;
          console.log("Compressed Base64 Code:\n", base64Code.value);
          // Send a POST request to the API to post the image, name, and comment
          const response = await fetch(URl_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              image: compressedBase64,
              name: newUserName,
              comment: newComment,
            }),
          });
          // Check if the response is successful, otherwise throw an error
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          console.log("Successfully posted to API!");
        };
        // Set the source of the image to the result of FileReader
        img.src = e.target.result;
      };
      // Read the selected file as a data URL
      reader.readAsDataURL(inputFile);
    } catch (error) {
      console.log(
        "Oh no! There was an error with posting your comment.",
        error
      );
    }
  };

  // useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    console.log(users);
    getUsers();
  }, []);

  return (
    <>
      <Container className="discoveries-form-wrapper">
        <div className="form-group">
          <h1 className="headers">Leave a Post of your finds 👇</h1>

          <div id="card-container">
            <div className="form-group">
              <label>name</label>
              <input
                className="form-control"
                onChange={(e) => setNewUserName(e.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label>Tell us about your find!</label>
              <textarea
                className="form-control"
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <div className="form-group">
                <label>Don't forget to upload a pic of your find!</label>
                <input
                  className="form-control"
                  type="file"
                  id="image-input"
                ></input>
                <br></br>
                <button className="submit-button" onClick={(e) => postFind(e)}>
                  Submit👌
                </button>
                <canvas className="canvas" id="image-canvas"></canvas>
                <textarea
                  id="base64Code"
                  onChange={(e) => setNewFind(e.target.value)}
                ></textarea>
              </div>

              <br></br>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default NewUserForm;
