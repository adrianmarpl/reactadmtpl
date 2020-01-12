import React, {Component} from 'react';
import PeopleList from './PeopleList'

export class EmptyPage extends Component {

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <PeopleList />
                    </div>
                </div>
            </div>
        );
    }
}