// Coding Steps:
// Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
// Project must meet the following criteria:
// Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
// Contain at least 10 components
// Allow for all CRUD operations

// ***************************************************

// Importing necessary components from react-bootstrap library
import { Container, Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import NewUserForm from "./newuser-form";
import { Accordion } from "react-bootstrap/esm";

// Setting API endpoint for fetching and updating data
const URl_ENDPOINT = "https://659effdd5023b02bfe892d70.mockapi.io/sims";

function DiscoveryPost() {
  // Setting up state variables using useState hook
  const [users, setUser] = useState([]); // State variable to store user data fetched from API
  const [updatedComment, setUpdatedComment] = useState(""); // State variable to store updated comment for a post
  const [editTextAreaValue, setEditTextAreaValue] = useState(""); // State variable to control the value of the textarea for editing** does not work***

  // Function to fetch user data from the API
  const getUsers = async () => {
    try {
      // Fetching data from the API
      const response = await fetch(URl_ENDPOINT);
      if (!response.ok) {
        throw new Error(
          `error with fetch on getUsers() status: ${response.status}`
        );
      }
      // Parsing the response
      const data = await response.json();
      // Updating the 'users' state with the fetched data
      setUser(data);
      console.log("data from the API", data);
      return;
    } catch (error) {
      console.log("error", error);
    }
  };

  // Function to delete a post
  function deletePost(id) {
    // Sending a DELETE request to the API to remove the post
    fetch(URl_ENDPOINT + `/${id}`, {
      method: "DELETE",
    })
      .then(() => getUsers())
      .then(() => console.log("user to be deleted", id));
  }

  // Function to update a post's comment
  function postnewComment(e, userObject) {
    // Creating an updated user object with the new comment
    let updatedUserObject = {
      ...userObject,
      comment: updatedComment,
    };

    // Sending a PUT request to update the user's comment
    fetch(`${URl_ENDPOINT}/${userObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserObject),
    })
      .then(() => {
        // Fetching updated user data
        getUsers();
        // Clearing the 'updatedComment' state to reset the textarea
        setUpdatedComment("");
        // Clearing the 'editTextAreaValue' state to reset the textarea
        setEditTextAreaValue("");
      })
      .then(() => console.log("value of userObject", userObject));
  }

  // useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    console.log(users);
    getUsers();
  }, []);

  // Rendering JSX
  return (
    <>
      <NewUserForm />
      <Container className="discoveries-card-wrapper">
        <Row>
          {/* Mapping through the 'users' array and rendering each user's post */}
          {users.map((user, index) => (
            <Col key={index} md={3}>
              <Card className="discoveries-card">
                <Card.Img variant="top" src={user.image} />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.comment}</Card.Text>
                </Card.Body>

                {/* Accordion component for edit/delete options */}
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>edit your post</Accordion.Header>
                    <Accordion.Body>
                      <button
                        className="edit-button"
                        value={editTextAreaValue}
                        onClick={(e) => postnewComment(e, user)}
                      >
                        edit✏️
                      </button>

                      <textarea
                        className="edit-textarea"
                        onChange={(e) => setUpdatedComment(e.target.value)}
                      ></textarea>
                    </Accordion.Body>
                  </Accordion.Item>
                  {/* Button to delete post */}
                  <button
                    className="delete-button"
                    onClick={() => deletePost(user.id)}
                  >
                    remove post ➖
                  </button>
                </Accordion>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default DiscoveryPost;
