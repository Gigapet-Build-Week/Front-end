import React from 'react';
import { newEntry } from '../../redux/actions/childActions'; //can add editEntry, deleteEntry
import { connect } from 'react-redux';
//import { useForm } from 'react-hook-form';
//import styled from 'styled-components';

class EntryForm extends React.Component {
  // const { register, handleSubmit, errors } = useForm();
  // const onSubmit = data => console.log(data);
  // console.log(errors);

  //state of component (thought 6 fields each w/ category="static value", serving="user inputted integer", and notes="user inputted string")

  //handleChange (more than likely similar to others)
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newEntry(/*entry form state object*/)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select name="Category">
          <option value="Fruits & Vegetable">FruitsVegetables</option>
          <option value=" Grain"> Grain</option>
          <option value=" Protein"> Protein</option>
          <option value=" Dairy"> Dairy</option>
          <option value=" Oils & Fats"> OilsFats</option>
          <option value=" Sugars"> Sugars</option>
        </select>
        <input type="number" placeholder="Serving Size" name="Serving Size" />

        <input type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  /*Entry state from reducer */
});

export default connect( mapStateToProps, { newEntry })(EntryForm);