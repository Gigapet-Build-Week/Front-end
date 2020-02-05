import React from 'react';
import { feedGigapet, updateGigapet } from '../../redux/actions/childActions';
import { connect } from 'react-redux';
/*
import feed and update from actions
stretch "and images"

take in props from "form" and decide what gigapet to show

map through data multiply each category by serving per category
sum them to find "health" the value in database for the total.
*/
class Gigapet extends React.Component {

    determineGigapet = (totalPoints) => {
        if (totalPoints >= 20) {
           return <p>healthy</p>
        } else if (totalPoints >= 15) {
           return <p>neutral</p>
        } else {
           return <p>unhappy</p>
        }
    }

    render() {
        return (
            <div>
                <h1>Gigapet Avatar</h1>
                {this.determineGigapet}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
  });
  
  export default connect( mapStateToProps, { feedGigapet, updateGigapet })(Gigapet);