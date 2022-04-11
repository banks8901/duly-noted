import React, { useState } from 'react';
import NoteListItem from './NoteListItem';
import relativeTime from  'dayjs/plugin/relativeTime';
import { useHistory } from "react-router-dom";
import useNotes from '../hooks/useNotes';
import { add } from "ionicons/icons";
import { useTranslation } from 'react-i18next';

import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
    IonButtons

} from "@ionic/react";
import {funnel} from "ionicons/icons";
import dayjs from 'dayjs';

dayjs.extend(relativeTime);



export default function NoteListPage(props){
    const history = useHistory();
    const {notes, createNote} = useNotes();
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const { t } = useTranslation();
    let archiveToggle = false;
    let [filterNotes, updateFilterNotes] = useState(notes);

    const handleListItemClick = (id) => {
        setSelectedNoteId(id);
        history.push(`/notes/edit/${id}`);
    }

    const handleNewNoteClick = () => {
        const { id } = createNote();
        history.push(`/notes/edit/${id}`);
    }

    const handleToggleArchived = () => {
        var fakeNotes = [];
        if(archiveToggle === true){
            fakeNotes.map((note) => {
                if(note.isArchived === false){
                    fakeNotes.push(note);
                }
            });
            updateFilterNotes(fakeNotes);
        } else if(archiveToggle === false){
            updateFilterNotes(notes);
        }
       
        archiveToggle = !archiveToggle

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{t("noteListPageTitle")}</IonTitle>
                    <IonButtons slot="primary">
                        <IonButton color="primary" onClick= {() => handleToggleArchived()}>
                            <IonIcon slot="icon-only" icon={funnel} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList lines = "full">
                    {
                        filterNotes.map((note) => {
                            return(
                                <NoteListItem 
                                    key={note.id} 
                                    id={note.id} 
                                    text={note.text} 
                                    createdAt={note.createdAt} 
                                    onClick={handleListItemClick}
                                />
                            );
                        })
                    }
                </IonList>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={handleNewNoteClick}>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>

       
    );
};