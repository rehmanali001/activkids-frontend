import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class ActivityListComponent extends Component{
    
    renderActivities = () => {
        
        return this.props.activities.map((activity, idx) => {
            const url = '/activities/' + activity.id;
            
            return (
                <li key={idx} >
                    <Link to={url} className="App-link">{activity.name}</Link>
                </li>
            );
        });
    };

    render(){
        return(
            <ul>
                {this.renderActivities()}
            </ul>
        );
    }
}