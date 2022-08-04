import React, {useContext} from 'react';
import LoadContext from './LoadContext';

function Load() {
const {item} = useContext(LoadContext);
console.log(item)
return (
    <div>
       <p>{item[0].origin}</p>
    </div>
)
}


export default Load;