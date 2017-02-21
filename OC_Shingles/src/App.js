import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import logo from './logo.png';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-info">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Roofing Shingle Guide for Home Owners</h2>
            </div >
              <p className="App-intro">Select Single Line</p>
              <p className="App-information">
                <div class="Shingle Line:">
                  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                  <div id="Shingle Line:" class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                  </div>

                  <p> Shingle Color</p>
              </p>
            </div>
      </div>
      
        
    );
  }
}

// <script>
// /* When the user clicks on the button, 
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
// </script>

export default App;
  
  