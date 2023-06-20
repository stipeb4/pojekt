import React, { Component } from 'react';

class Kontakt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ime: '',
    };
  }

  promjena = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="kontakt" id="kontakt">
        <h1>kontaktirajte nas</h1>
        <div className="kontakt-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5786.500413906091!2d16.45641539762571!3d43.517974864557296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e3f08025dd3%3A0x17f326189bac15ac!2sKocunar%2C%2021000%2C%20Split!5e0!3m2!1shr!2shr!4v1686066367482!5m2!1shr!2shr"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="forma">
            <form action="#">
              <p>Hvala vam {this.state.ime} na posjeti!</p>
              <h2>pošaljite nam poruku</h2>
              <input onChange={this.promjena} type="text" name="ime" id="ime" placeholder="Ime" />
              <br />
              <input type="email" name="prezime" id="prezime" placeholder="Prezime" />
              <br />
              <textarea name="poruka" id="poruka" cols="30" rows="10" placeholder="Poruka"></textarea>
              <br />
              <button>pošalji</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Kontakt;
