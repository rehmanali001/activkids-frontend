import React, {Component} from 'react';
import ActivityListComponent from '../components/ActivityListComponent';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class ActivitiesPageComponent extends Component {
    render() {
       
    return (
        <div>
        <h1>All fun activities</h1>
        <ActivityListComponent activities={this.props.activities}/>
        <Link to="/activities-new">Add a new Activity</Link>
        </div>
    )
}

}

const mapStateToProps = state => ({activities: state.manageActivities.activities});

export default connect (mapStateToProps, null)(ActivitiesPageComponent)