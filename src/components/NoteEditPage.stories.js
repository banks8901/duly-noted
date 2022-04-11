import NoteEditPage from "./NoteEditPage";

export default {
    Title: "NoteEditPage",
    Component: NoteEditPage
}

//empty text

export const EmptyText = () => {

    const onSave = () => {
        throw new Error("text is empty!");
    }
    return(<NoteEditPage text="" onSave={onSave}/>)
}