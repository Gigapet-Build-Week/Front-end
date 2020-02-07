import React from 'react';
import { feedGigapet, updateGigapet } from '../../redux/actions/childActions';
import { connect } from 'react-redux';
import HappyDoggo from './images/gigapet-happy-dog.png';
import NeutralDoggo from './images/gigapet-neutral-dog.png';
import UnhappyDoggo from './images/gigapet-sad-dog.png';

class Gigapet extends React.Component {
    state = {
        points: 0,
        status: 'neutral'
    }

    calculateTotalPoints = () => {
    /*
    map through data multiply each category by serving per category
    sum them to find "health" the value in database for the total.
    */
    }

    determineGigapet = () => {
        if (this.state.status === 'happy') {
           return <img src={HappyDoggo} alt='Happy Gigapet' />
        } else if (this.state.status === 'neutral') {
           return <img src={NeutralDoggo} alt='Neutral Gigapet' />
        } else {
           return <img src={UnhappyDoggo} alt='Unhappy Gigapet' />
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <p>Gigapet Avatar</p>
                {this.determineGigapet()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    points: state.points,
    status: state.status,
    entry: state.entry
    // points: state.child.points,
    // status: state.child.status,
});
  
export default connect( mapStateToProps, { feedGigapet, updateGigapet })(Gigapet);