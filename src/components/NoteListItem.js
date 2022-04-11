import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import formatDate from '../util/formatDate';
import { IonItem, IonLabel } from "@ionic/react";
import formatNoteItemText from '../util/formatNoteItemText';

export default function NoteListItem(props){
    const { 
        createdAt,
        id,
        onClick = () => {},
        text
    } = props;

    const [timesClicked, setTimesClicked] = useState(0);
    
    


    

    const handleItemClick = (event) => { 
        event.preventDefault();
        setTimesClicked(timesClicked + 1);
        if (onClick){
            onClick(id)
        }
    }

    //const oneHourAgo = Date.now() - (1 * 60 * 60 * 1000);
    

    return (       
        <IonItem onClick={() => onClick(id)}>
            <IonLabel>
                <ReactMarkdown children={formatNoteItemText(text)} />
                <p>{formatDate(createdAt)}</p>
            </IonLabel>
        </IonItem>
    );
}
NoteListItem.propTypes = {
    createdAt: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}