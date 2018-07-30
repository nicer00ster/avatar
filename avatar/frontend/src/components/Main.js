import React from 'react';
import { connect } from 'react-redux';
import { notes, auth } from "../actions";
import Nav from './Nav';

class Main extends React.Component {
  state = {
    text: "",
    updateNoteId: null,
  }
  componentDidMount() {
      this.props.fetchNotes();
  }
  resetForm = () => {
    this.setState({ text: "", updateNoteId: null });
  }

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
  render() {
    return (
      <React.Fragment>
      <Nav />
      <main className="_dashboard">
          <h2>Avatar</h2>
          <hr />
          <div style={{textAlign: "right"}}>
            {this.props.user.username} (<a onClick={this.props.logout}>logout</a>)
          </div>
      </main>
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

const mapDispatchToProps = dispatch => {
  return {
    addNote: (text) => {
      return dispatch(notes.addNote(text));
    },
    updateNote: (id, text) => {
      return dispatch(notes.updateNote(id, text));
    },
    deleteNote: (id) => {
      return dispatch(notes.deleteNote(id));
    },
    fetchNotes: () => {
      return dispatch(notes.fetchNotes());
    },
    logout: () => {
      return dispatch(auth.logout())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
