import React from 'react';
import { connect } from 'react-redux';
import { notes, auth } from "../actions";
import Nav from './Nav';

class Note extends React.Component {
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
      <main className="landing">
          <h2>Welcome to PonyNote!</h2>
          <hr />
          <div style={{textAlign: "right"}}>
            {this.props.user.username} (<a onClick={this.props.logout}>logout</a>)
          </div>
          <h3>Add new note</h3>
          <form onSubmit={this.submitNote}>
              <input
                  value={this.state.text}
                  placeholder="Enter note here..."
                  onChange={(e) => this.setState({text: e.target.value})}
                  required />
              <button onClick={this.resetForm}>Reset</button>
              <input type="submit" value="Save Note" />
          </form>

          <h3>Notes</h3>
          <table>
              <tbody>
                  {this.props.notes.map((note, id) => (
                      <tr key={`note_${note.id}`}>
                          <td>{note.text}</td>
                          <td><button onClick={() => this.selectForEdit(id)}>edit</button></td>
                          <td><button onClick={() => this.props.deleteNote(id)}>delete</button></td>
                      </tr>
                  ))}
              </tbody>
          </table>
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


export default connect(mapStateToProps, mapDispatchToProps)(Note);
