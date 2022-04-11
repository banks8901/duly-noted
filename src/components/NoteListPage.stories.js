import react from "react";
import { action } from "@storybook/addon-actions"
import NoteListPage from "./NoteListPage";

export default {
    Title: "NoteListPage",
    Component: NoteListPage
}

//default note list page

export const DefaultPage = () => {
    return(<NoteListPage />)
}