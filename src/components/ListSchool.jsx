import React from 'react'
import School from './School'

export default function ListSchool(props) {

    // variable ecoles reçoit un tableau des écoles filtrés 
    let ecoles = props.filterEcoles.map((ecole, index) => {
        return (
            // React.Fragment récente version de react <></>
            <>
                {/* return le composant school avec les props envoyés */}
                <School
                    name={ecole.schoolName}
                    numbreEtudiants={ecole.schoolYearlyDetails[0].numberOfStudents}
                    addresse={ecole.address.html}
                    key={index}
                    number={ecole.length}
                />
            </>
        )
    })
    return (
        <div>
            {/* afficher les donneés dans le dom */}
            <p>{props.nombreResultat} Résultats</p>
            {ecoles}
        </div>
    )
}
