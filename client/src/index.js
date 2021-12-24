import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let span =document.querySelector(".up");
window.onscroll =function(){
  // console.log(this.scrollY);
  if (this.scrollY >=1000){
    span.classList.add("show")
  }
  else{
    span.classList.remove("show")
  }
}
span.onclick =function(){
    window.scrollTo({
      top:0
      ,behavior:'smooth'
    })
}