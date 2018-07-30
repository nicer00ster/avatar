import React from 'react';
import { connect } from 'react-redux';
import { notes, auth } from "../actions";
import Nav from './Nav';
import Select from 'react-select'

class Profile extends React.Component {
  state = {
    avatar: '',
    zip: '',
    bio: '',
  }
  componentDidMount() {
      this.props.fetchNotes();
      // TODO: replace with fetchProfile
  }
  // resetForm = () => {
  //   this.setState({ text: "", updateNoteId: null });
  // }

  selectForEdit = (id) => {
    let note = this.props.notes[id];
    this.setState({ text: note.text, updateNoteId: id });
  }
  submitNote = (e) => {
    const { updateNoteId, text } = this.state;
    const { addNote, updateNote } = this.props;
    e.preventDefault();
    if (updateNoteId === null) {
      addNote(text).then(this.resetForm)
    } else {
      updateNote(updateNoteId, text).then(this.resetForm);
    }
    this.resetForm();
  }
  updateProfile = e => {
    e.preventDefault();

  }
  render() {
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];
    return (
      <React.Fragment>
      <Nav />
      <h2>Avatar</h2>
      <hr />
      <div style={{textAlign: "right"}}>
        {this.props.user.username} (<a onClick={this.props.logout}>logout</a>)
      </div>
      <form className="_profile" onSubmit={this.updateProfile}>
        <h1 className="animated fadeInDown"><i className="icon icon-arrow-down"></i></h1>
        <h2>Pick your avatar</h2>
        <Select options={options} />
        <h2>Enter your zipcode</h2>
        <input type="number"/>
        <h2>Say something about yourself!</h2>
        <textarea name="biography" cols="50" rows="10"></textarea>
        <button>Save Profile</button>
      </form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    user: state.auth.user
  }
}
// {/* <form onSubmit={this.submitNote}>
//     <input
//         value={this.state.text}
//         placeholder="Enter note here..."
//         onChange={(e) => this.setState({text: e.target.value})}
//         required />
//     {/* <button onClick={this.resetForm}>Reset</button> */}
//     <input type="submit" value="Save Note" />
// </form>
//   <h3>Add new note</h3>
// <h3>Notes</h3>
// <table>
//     <tbody>
//         {this.props.notes.map((note, id) => (
//             <tr key={`note_${note.id}`}>
//                 <td>{note.text}</td>
//                 <td><button onClick={() => this.selectForEdit(id)}>edit</button></td>
//                 <td><button onClick={() => this.props.deleteNote(id)}>delete</button></td>
//             </tr>
//         ))}
//     </tbody>
// </table> */}
const mapDispatchToProps = dispatch => {
  return {
    addNote: (text) => {
        return dispatch(notes.addNote(text));
    },
    updateNote: (id, text) => {
        return dispatch(notes.updateNote(id, text));
    },
    deleteNote: (id) => {
      dispatch(notes.deleteNote(id));
    },
    fetchNotes: () => {
      dispatch(notes.fetchNotes());
    },
    logout: () => {
      dispatch(auth.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
