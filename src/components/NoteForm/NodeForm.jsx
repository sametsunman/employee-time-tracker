import React, {Component} from 'react'

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteTitle: "",
            newNoteContent: ""
        }
        this.writeNote = this.writeNote.bind(this);
    }
         
    writeNote() {
        var data = {
            noteTitle: this.state.newNoteTitle,
            noteContent: this.state.newNoteContent
        };
        this.props.addNote(data)

        this.setState({
            newNoteTitle: "",
            newNoteContent: ""
        });
    }

    render() {
        return (
            <div className="pt-callout .modifier cardCustomCss">
            <h4 className="pt-callout-title">Add New Note</h4>
                <input placeholder="Note Title"
                       className="pt-input .modifier pt-intent-success inputCustomCss"
                       dir="auto"
                       value={this.state.newNoteTitle}
                       onChange={event => this.setState({newNoteTitle: event.target.value})}
                />
                <input placeholder="Note Content"
                       className="pt-input .modifier pt-intent-success inputCustomCss"
                       dir="auto"
                       value={this.state.newNoteContent}
                       onChange={event => this.setState({newNoteContent: event.target.value})}/>

                <button
                    type="button"
                    className="pt-button pt-intent-success"
                    onClick={this.writeNote} >
                    Add Note
                    <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
                </button>
            </div>
        )
    }
}

export default NoteForm;