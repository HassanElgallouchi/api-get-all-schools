import React from 'react'

export default function School(props) {
    return (
        <div className="card-school">
            <p><label htmlFor="nomEcole">Nom de l'école : </label>

                {/* dangerouslySetInnerHtml sert à transformer le rendu html en texte brute  */}
                <span dangerouslySetInnerHTML={{ __html: props.name }}></span>
            </p>
            <p>
                <label htmlFor="nombreEtudiants">Nombre d'étudiants : </label>
                {/* afficher la valeure passé en props du composant parent (ListSchool) */}
                <span>{props.numbreEtudiants}</span>
            </p>
            <p>
                <label htmlFor="adresseComplete">Adresse complete : </label>
                <span dangerouslySetInnerHTML={{ __html: props.addresse }}></span>
            </p>
        </div>
    )
}
