export default function formatNoteItemText(text){
    let holderText = text;
    if(typeof(holderText) === 'undefined'){
        holderText = "No note text";
    }
    holderText = holderText.trim();
    if(holderText.length === 0){
        holderText = "No note text";
    } else if(holderText.length > 0){
        let tempText = holderText;
        tempText = tempText.trim();
        if(tempText.length === 0){
            holderText = "No note text";
        }
    }

    
    
    holderText = holderText.replace(/\n\s*\n/gm, '\n');
    holderText = holderText.replace(/[\r\n]\s*/gm, ' - ');
    if(holderText.length > 200){
        
        holderText = `${text.substring(0, 200)}...`;
    }
 

    console.log(holderText);
    return holderText
}