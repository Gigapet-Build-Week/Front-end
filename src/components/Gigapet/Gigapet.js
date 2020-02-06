import React from 'react';
import { feedGigapet, updateGigapet } from '../../redux/actions/childActions';
import { connect } from 'react-redux';
import HappyDoggo from './images/gigapet-happy-dog.png';
import NeutralDoggo from './images/gigapet-neutral-dog.png';
import UnhappyDoggo from './images/gigapet-sad-dog.png';
/*

take in props from "form" and decide what gigapet to show

map through data multiply each category by serving per category
sum them to find "health" the value in database for the total.
*/
class Gigapet extends React.Component {

    determineGigapet = (totalPoints) => {
        if (totalPoints >= 20) {
           return <img src={HappyDoggo} alt='Happy Gigapet' />
        } else if (totalPoints >= 15) {
           return <img src={NeutralDoggo} alt='Neutral Gigapet' />
        } else {
           return <img src={UnhappyDoggo} alt='Unhappy Gigapet' />
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