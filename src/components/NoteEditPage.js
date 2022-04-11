import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonActionSheet,
    useIonAlert
} from "@ionic/react";
import {chevronBack, ellipsisHorizontal, trash, close, funnel} from "ionicons/icons";
import styles from "./NoteEditPage.module.css";

export default function NoteEditPage(props){
    const { 
        text,
        onSave,
        onDelete,
        onArchive,
     } = props;

     const [present] = useIonAlert();

     const [value, setValue] = useState(text);
     const { t } = useTranslation();
     const [showActions, setShowActions] = useState(false);
    return (    
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonButton color="secondary" onClick= {() => onSave(value)}>
                            <IonIcon slot="icon-only" icon={chevronBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{t("noteEditPageTitle")}</IonTitle>
                    
                    <IonButtons slot="primary">
                        <IonButton color="secondary" onClick={() => onArchive(value)}>
                            <IonIcon slot="icon-only" icon={funnel} />
                        </IonButton>
                        <IonButton color="secondary" onClick={() => setShowActions(true)}>
                            <IonIcon slot="icon-only" icon={ellipsisHorizontal} />
                        </IonButton>
                        
                    </IonButtons>
                    
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <textarea className={styles.textArea} value={value} onChange={(event) => setValue(event.target.value)} /><br></br>
                <IonActionSheet
                    isOpen={showActions}
                    onDidDismiss={() => setShowActions(false)}
                    buttons={[
                        {
                            text: t("deleteText"),
                            role: "destructive",
                            icon: trash,
                            handler: onDelete
                        },
                        {
                            text: t("cancelText"),
                            role: "cancel",
                            icon: close,
                            handler: () => setShowActions(false)
                        }
                    ]}
                />
            </IonContent>
        </IonPage>   
        
    );
}

NoteEditPage.propTypes = {
    text: PropTypes.string.isRequired,
    onSave: PropTypes.func,
    onDelete: PropTypes.func
}