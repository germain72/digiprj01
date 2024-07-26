import React from "react";

export default class MonForm02 extends React.Component {
    constructor(props) {
        super(props)
        //this.inputNom = React.createRef() // Pointeur sur un élément du DOM
        this.monForm =  React.createRef() // Pointeur sur un élément du DOM :mon formulaire
    }

    onSubmitForm02 = (e)=>{
        e.preventDefault()
        //console.log(this.inputNom)
        console.log(this.monForm.current.nom.value)
    }
    onFocusPrenom = (e)=>{
        this.monForm.current.prenom.focus()
    }

    render() {
        /**
         * pour les événements on appel un callback
         * en JS on passe les noms des méthodes ou des fonctions sans paraenthèses
         * pour éviter que le navigateur (Javscript soit exécuté immédiatement)
         * defaultValue={'Nom'} -> une valeur par défaut
         */
        return(
            <form onSubmit={this.onSubmitForm02} ref={this.monForm}>
                <label htmlFor="nom">Nom</label>
                <input type='text' name='nom'  placeholder="Saisir le Nom" />
                <br/>
                <label htmlFor="prenom">Prénom</label>
                <input type='text' name='prenom'  placeholder="Saisir le Prénom" />
                <hr/>
                <br/>
                <button type="button" onClick={this.onFocusPrenom}>Focus Prénom</button>
                <br/>
                <button type="submit">Valider</button>
            </form>
        )
    }
}
