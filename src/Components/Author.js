import React, {Component} from 'react';

class Author extends Component {

    constructor() {
        super();
        this.displayAuthor = this.displayAuthor.bind(this);
    }

    displayAuthor() {
        alert('Le nom de l\'auteur est : ' + this.props.name);
    }

    render() {
        return (
            <button onClick={this.displayAuthor}>Afficher le nom de l'auteur</button>
        );
    }
}

export default Author;
