import React from "react";
import "./imageList.css";
import SearchBar from "./SearchBar";
import unsplash from "../API/unsplash";
import ImageList from "./ImageList";
import { Message } from "semantic-ui-react";

class App extends React.Component {
  state = { images: [] };

  onSubmitForm = async (term) => {
    console.log(`the term is "${term}"`);
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    console.log(res.data.results);
    this.setState({ images: res.data.results });
  };

  checkIfImagesArrayIsEmpty = () => {
    return this.state.images.length > 0 ? (
      <div
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "14px",
        }}
      >
        <div style={{ width: "60%", margin: "auto" }}>
          <Message positive>
            <Message.Header>
              WE FOUND {this.state.images.length} PICTURES FOR YOU!
            </Message.Header>
            <p>
              Lets hope you <b> Enjoy</b> the pictures..
            </p>
          </Message>
        </div>
        <div
          style={{
            height: "100%",

            width: "100%",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <ImageList className="imageListDis" images={this.state.images} />
        </div>
      </div>
    ) : (
      <div
        style={{
          height: "100vh",
          backgroundColor: "grey",
          width: "90%",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
            position: "absolute",
            top: "200px",
            left: "35%",
          }}
        >
          Please Enter A Category{" "}
        </h1>
      </div>
    );
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onSubmitForm} />
        <div>{this.checkIfImagesArrayIsEmpty()}</div>
      </div>
    );
  }
}

export default App;
