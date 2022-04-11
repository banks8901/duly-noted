import React from "react";
import { useParams } from "react-router";
import NoteEditPage from "./NoteEditPage";
import { useHistory } from "react-router-dom";
import useNotes from "../hooks/useNotes";
import { useIonAlert } from "@ionic/react";
import { t } from "i18next";

export default function NoteEditPageController(){
    const { id } = useParams();
    const history = useHistory();
    const {notes, deleteNote, updateNote, archiveNote} = useNotes();
    const [present] = useIonAlert();
    const selectedNote = notes.find((note) => note.id === id)
    if(!selectedNote) return null

    const handleOnSave = (newNoteText) => {
        var holderText = newNoteText;
        holderText = holderText.replace(/\s+/g,'')
        if(holderText === ''){
            deleteNote(id);
            history.goBack();
        }else{
            updateNote(id, newNoteText);
            history.goBack();
        }
        
    };
    
    const handleOnDelete = () => { //used filter to filter out the note that had the matching id to the current selectednoteid
        present({
            header: t("alertHeaderText"),
            message: t("alertMessageText"),
            buttons: [
                t("cancelText"),
                { text: t("confirmText"), handler: (d) => {
                    deleteNote(id);
                    history.goBack();
                }}
            ],
            onDidDismiss: (e) => {},
        })
    }

    const handleOnArchive = () => {
        archiveNote(id);
    }
    

        
    return(
        <NoteEditPage onSave={handleOnSave} text={selectedNote.text} onDelete={handleOnDelete} onArchive={handleOnArchive}/>
    )
}
