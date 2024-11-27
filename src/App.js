import 'bootstrap/dist/css/bootstrap.min.css'
import { Component, useState } from "react";

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"
import MyModal from "./components/MyModal"



document.getElementsByTagName('html')[0].classList.add('h-100')
document.getElementsByTagName('body')[0].classList.add('h-100')
document.getElementById('root').classList.add('h-100')



class App extends Component {

  state = {
    bookFilter: 'history', // Variabile per tenere traccia del filtro selezionato
    modalShow: false, // Variabile che gestisce l'apparizione del modale
    modalContent: {
      asin: '',
      title: '',
      img: '',
      price: 0,
      category: '',
    }
  }

  changeFilter = (label) => {
    this.setState({ bookFilter: label })
    console.log(`Filtro selezionato: ${label}`) // Per verificare
  }

  setModalShow = (state, content) => {
    this.setState({
      modalShow: state,
      modalContent: content,
    })
    console.log(`modalShow è: ${state}`) // Per verificare
    console.log(`content è: ${JSON.stringify(content)}`) // Per verificare
  }

  render() {
    return (
      <div className="d-flex flex-column h-100">
        <header className="d-flex flex-column flex-shrink-0">
          <MyNav title="BookShop" changeFilter={this.changeFilter} fluid={true} />
          <Welcome />
        </header>
        <main className="container d-flex flex-column flex-grow-1">

          <h1 className='mt-5 text-capitalize'>Categoria {this.state.bookFilter}</h1>

          {this.state.modalShow &&
            <MyModal
              show={this.state.modalShow}
              modalContent={this.state.modalContent}
              onHide={() => this.setModalShow(false, {})}
            />}

          <AllTheBooks category={this.state.bookFilter} setModalShow={this.setModalShow} />

        </main>
        <footer className="d-flex flex-column flex-shrink-0">
          <MyFooter />
        </footer>
      </div>
    );
  }

}

export default App;
library.add(fab, fas, far)
