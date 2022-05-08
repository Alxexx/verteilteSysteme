
import './App.css';
import React, { Component } from "react";
import { fetchAllBooks } from "./RestClient";

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);

  }

 

  async fetchDisplayData() {
    let data = await fetchAllBooks();
    this.setState({ books: data });
  }



  render() {
    return (
      <div>
        
        <div id="title" > Movie API </div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Select a movie
        </button>
        <div className="data">
          {/* generates a div for every entry */}
          {this.state.books.map((book, key) => (
            <div key={key}>
              Movie: {book.movieName},
              Director: {book.director}, 
              Duration: {book.duration}
            </div>
          ))}
        </div>
      </div>
      
    );
  }
}




export default App;
