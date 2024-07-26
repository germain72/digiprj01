import React from "react";
/**
 * Formulaire managé DataBinding
 */
export default class MonForm01 extends React.Component {
    constructor(props) {
        super(props)
        //J'initialise un attribut state.nom avec la valur 'DIGI'
        this.state = {nom : '',prenom:'',age:0}
    }
    /**
    onChgNom = (e)=>this.setState({nom:e.target.value})
    onChgPrenom = (e)=>this.setState({prenom:e.target.value})
    onChgAge = (e)=>this.setState({age:e.target.value})
    */

    onChgForm01 = (change)=>{
        const target  = change.target //Le contenu de la balise parente
        const value = target.type === 'checkbox'? target.checked : target.value
        const name = target.name
        this.setState({[name] : value})
    }
    onSubForm01 = (e)=>{e.preventDefault();alert(this.state.nom+' '+this.state.prenom+' '+this.state.age)}

    render() {
        /**
         * onSubmit={(e)=>{e.preventDefault();alert(this.state.nom)}}
         * Je bloque le submit et j'affiche la valeur du state.nom
         * <input type="text" value={this.state.nom} name="nom" 
                        onChange={(e)=>this.setState({nom:e.target.value})}
                        />
            Je fais un lien bilatéral avec le state.nom avec :
            value et le onChange : Il faut connaître le JS et le HTML
            Je peux mettre des contrôles sur mes balises
            au niveau pattern (regex), min, max, des valeurs par défault
            En HTML : required -> Obligatoire
            En HTML : type="number" min='18' max='65'
         */
        return (
            <form onSubmit={this.onSubForm01}>
                    <label htmlFor="nom">Nom</label>
                    <input type="text" value={this.state.nom} name="nom" required
                        onChange={this.onChgForm01}
                        />
                    <br/>
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" value={this.state.prenom} name="prenom" required
                        onChange={this.onChgForm01}
                        />
                    <br/>
                    <label htmlFor="age">Age</label>
                    <input type="number" value={this.state.age} name="age" min='18' max='65'
                        onChange={this.onChgForm01}
                        />
                    <br/>
                    <input type="submit" value="Validation" />
            </form>
        )
    }
}