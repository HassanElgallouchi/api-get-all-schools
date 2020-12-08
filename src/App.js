import React from 'react';
import './App.css';
import Header from './components/Header';
import ListSchool from './components/ListSchool';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      appID: '3a997a93', 
      appKey: '0d6e2163aa8d6dcd882c4d849e40a892',
      etatEcole: '',
      nomEcole: '',
      listEcoles: [],
      perPage: 1
    }
  }

  // handleClick exécute la requete lors de click sur le button 
  handleClick = (e) => {
    // fetch('https://api.schooldigger.com/v1.2/schools?st=' + this.state.etatEcole + '&q=' + this.state.nomEcole + '&perPage=' + this.state.perPage + '&appID=' + this.state.appID + '&appKey=' + this.state.appKey)
    fetch('./ddb.json')
      .then(res => res.json())
      .then(data => {
        // condition si etatEcole est vide ET etatEecole est non un numéro 
        if (this.state.etatEcole !== '' && isNaN(this.state.etatEcole)) {

          // modifier le tableau listEcoles avec les valeures récupéreé dans la requete  
          this.setState({ listEcoles: data.schoolList })
        } else {
          return null
        }
      })
      .catch((err) => {
        document.getElementById('erreur').innerHTML = '<div class="erreur">Oops... une erreur est survenue !!</div>'
      })
  }

  // handleChange mit à jour les states taper par l'utilisateur
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    // filtrer le tableau listEcoles par le nom de chaque école si il correspond au state taper par l'utilisateur
    let filterEcoles = this.state.listEcoles.filter((ecole) => {
      return ecole.schoolName.toLowerCase().includes(this.state.nomEcole.toLowerCase())
    })
    return (
      <>
        {/* afficher header composant dans app */}
        <Header />
        <main>
          <div className="container">
            <div className="form-recherche">
              <p>
                <label htmlFor="étatEcole">État : </label>
                <input name="etatEcole" onChange={this.handleChange} type="text" placeholder="(ex CA)" />
              </p>
              <p>
                <label htmlFor="nomÉcole">Nom d'école : </label>
                <input name="nomEcole" onChange={this.handleChange} type="text" placeholder="Harvard" />
              </p>
              <p>
                <label htmlFor="perPage">nombre de résultat : </label>
                <input name="perPage" onChange={this.handleChange} type="number" max="50" min="1" value={this.state.perPage} />
              </p>
              <p>
                <button onClick={this.handleClick}>Rechercher</button>
              </p>
            </div>
            {/* condition ternaire : si filterEcoles est deffirent de undefined ? affiche le rendu : sinon n'affiche rien */}
            {
              filterEcoles !== undefined ? <ListSchool filterEcoles={filterEcoles} nombreResultat={this.state.listEcoles.length} /> : null
            }
            <div id="erreur"></div>
          </div>
        </main>
      </>
    );
  }
}

export default App;