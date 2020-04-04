import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import './App.css';
import Logo from "./logo.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="website logo"/>
        <p>Couple Fellas, Couple Cans</p>
        <InstagramEmbed
          url='https://www.instagram.com/p/B9_T7xNpZq8/'
          maxWidth={800}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        />
      </header>
    </div>
  );
}

export default App;
