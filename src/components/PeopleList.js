import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import peopleReducer from '../reducers/PeopleReducer';

const PeopleList = () => {
    const [peoples, dispatch] = useReducer(peopleReducer, []);

    useEffect(() => {
        console.log('render peoples', peoples);
        if (peoples.length === 0) {
            axios.get('https://swapi.co/api/people/')
                .then(res => {
                    const response = res.data;
                    dispatch({ type: 'SET', peoples: response.results });
                });
        }
    }, [peoples]);

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