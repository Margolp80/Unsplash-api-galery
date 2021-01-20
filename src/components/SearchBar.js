import React from "react";
import { Input } from "semantic-ui-react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmitted = (event) => {
    event.preventDefault();
    console.log("Form was submitted successfully");
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div style={{ width: "50%", margin: "auto", marginTop: "20px" }}>
        <form onSubmit={this.onFormSubmitted}>
          <Input
            color="teal"
            action={{ color: "teal", content: "search" }}
            placeholder="Search here for category..."
            fluid
            label="Images"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
