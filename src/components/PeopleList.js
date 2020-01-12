import React, { useReducer, useEffect } from 'react';
import peopleReducer from '../reducers/PeopleReducer';
import API from '../api';

const PeopleRender = (peoples, dispatch) => {
    console.log('render peoples', peoples);
    if (peoples.length === 0) {
        API.get('/people')
            .then(res => {
                const response = res.data;
                dispatch({ type: 'SET', peoples: response.results });
            });
    }
}

const PeopleList = () => {
    const [peoples, dispatch] = useReducer(peopleReducer, []);

    useEffect(() => {
        PeopleRender(peoples, dispatch);
    });

    return (
        <div>
            <div>List people</div>
            <ul>
                {peoples.map(p => (
                    <li key={p.name}>{p.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PeopleList;