import dayjs from "dayjs";

var relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(relativeTime)

function formatDate(date){ //format date function
    if( date >= Date.now() - (1 * 7 * 24 * 60 * 60 * 1000)){
        return dayjs(date).fromNow();
    } else{
        return dayjs(date).format("hh:mm a on M/D/YYYY");
        
    }
}

export default formatDate