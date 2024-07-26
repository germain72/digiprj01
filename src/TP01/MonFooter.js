function MonFooter(props) {
    return (
        <div>
        <footer>
            <h2>{props.nom} - {props.prenom} - {props.session} </h2>
        </footer>
        </div>
    );
}

export default MonFooter;