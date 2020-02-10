import React from 'react'
import { newEntry, editEntry } from '../../redux/actions/childActions' //can add editEntry, deleteEntry
import { connect } from 'react-redux'
import styled from 'styled-components'

const FormContainer = styled.div`
position: absolute;
width: 50%;
height: 25%;
top: 20%;
left: 25%;
background: #e96a2b;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;

const FormStyle = styled.form`
[name="Category"], [name='Serving Size']{
  width: 50%;
  height: 50%;
  padding: 2% 2%;
  margin: 2% 0;
  font-size: 150%;
  box-sizing: border-box;
  background-color: DarkSlateBlue;
  color: OldLace;
}

[type="submit"] {
  background-color: #4CAF50;
  border: none;
  color: OldLace;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 150%;
}
`;


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
      <FormContainer>
      <FormStyle className = 'FormStyle' onSubmit={this.handleSubmit}>
        <select name="Category">
          <option value="Fruits & Vegetable">Fruits & Vegetables</option>
          <option value=" Grain"> Grain</option>
          <option value=" Protein"> Protein</option>
          <option value=" Dairy"> Dairy</option>
          <option value=" Oils & Fats"> Oils & Fats</option>
          <option value=" Sugars"> Sugars</option>
        </select>
        <input type="number" placeholder="Serving Size" name="Serving Size" />

        <input type="submit" />
        </FormStyle>
        {this.entryEditing && (
          <FormStyle className = 'FormStyle' onSubmit={this.editEntry}>
          <select name="Category">
            <option value="Fruits & Vegetable">Fruits & Vegetables</option>
            <option value=" Grain"> Grain</option>
            <option value=" Protein"> Protein</option>
            <option value=" Dairy"> Dairy</option>
            <option value=" Oils & Fats"> Oils & Fats</option>
            <option value=" Sugars"> Sugars</option>
          </select>
          <input type="number" placeholder="Serving Size" name="Serving Size" />

          <input type="submit" />
          </FormStyle>
        )}
      </FormContainer>
    );
  }
}

const mapStateToProps = state => ({
  entryEditing: state.entryEditing
});

export default connect( mapStateToProps, { newEntry, editEntry })(EntryForm);