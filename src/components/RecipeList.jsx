import React from 'react'

const RecipeList = ({ id, name, ing }) => {
    return (
        <li>
            <h3>음식의 종류: {id}</h3>
            <p>음식명: {name}</p>
            <p>
                {ing.map((item, id) =>
                    <span key={id}>재료: {item}</span>
                )}
            </p>
        </li>
    )
}

export default RecipeList