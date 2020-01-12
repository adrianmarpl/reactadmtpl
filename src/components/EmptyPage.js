import React, {Component} from 'react';
import PeopleList from './PeopleList'

export class EmptyPage extends Component {

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Empty Page</h1>
                        <p>Use this page to start from scratch and place your custom content.</p>
                        <PeopleList />
                    </div>
                </div>
            </div>
        );
    }
}