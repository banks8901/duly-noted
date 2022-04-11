import react from "react";
import { action } from "@storybook/addon-actions"
import NoteListItem from "./NoteListItem";

export default {
    Title: "NoteListItem",
    Component: NoteListItem
}

//short text

export const ShortText = () => {
    return(<NoteListItem id="1" createdAt={new Date()} text="this is a short note!" />)
}

//long text

export const LongText = () => {
    return(<NoteListItem id="1" createdAt={new Date()} text="this is a long note! this is a long note! this is a long note! this is a long note! this is a long note! this is a long note! this is a long note! this is a long note! this is a long note! this is a long note! this is a long note! this is a long note! this is a long note! " />)
}

//markdown text

export const MarkdownText = () => {
    
    return(<NoteListItem id="1" createdAt={new Date()} text="This _is_ **some** _markdown_ **text**" />)
}

//created less than 1 week

const sixDaysAgo = Date.now() - (6 * 24 * 60 * 60 * 1000);

export const Less1WeekText = () => {
    const createdAt = new Date(sixDaysAgo)
    return(<NoteListItem id="1" createdAt={createdAt} text="this is a short note!" />)
}

//created more than 1 week

const twoWeeksAgo = Date.now() - (14 * 24 * 60 * 60 * 1000);

export const More1WeekText = () => {
    const createdAt = new Date(twoWeeksAgo)
    return(<NoteListItem id="1" createdAt={createdAt} text="this is a short note!" />)
}

//click action

export const ClickAction = () => {
    return(<NoteListItem 
        id="1" 
        createdAt={new Date()} 
        text="this is a short note!"
        onClick={action("onClick")} 
        />)
}

//empty state

export const EmptyText = () => {
    return(<NoteListItem id="1" createdAt={new Date()} text="" />)
}

//error state

export const ErrorInOnClick = () => {

    const onClick = () => {
        throw new Error("fake error!");
    }
    return(<NoteListItem 
        id="1" 
        createdAt={new Date()} 
        text="this is a clickable note!" 
        onClick={onClick}
        />)
}

//spaces only

export const SpacesOnly = () => {
    return(<NoteListItem id="1" createdAt={new Date()} text=" "/>)
}