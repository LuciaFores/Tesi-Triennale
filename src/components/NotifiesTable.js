import React from 'react';
import { confirmDelete, createNotifyObject, displayMessageBody, rearrangeNotifies} from '../components/Utils';

function NotifiesTable(){
    const notifies = rearrangeNotifies();
    

    let tableItems 
    if(notifies[0][0] === ""){
         tableItems = <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    }
    else{
        tableItems = notifies.map((notify) => 
        <tr key={notify[0]}>
            <td>{notify[0]}</td>
            <td>{createNotifyObject(notify[2], notify[3], notify[5], notify[6], notify[7])}</td>
            <td><button className='btn btn-primary' onClick={() => displayMessageBody(notify[1], notify[2], notify[3], notify[4], notify[5], notify[6], notify[7])}>Leggi</button></td>
            <td><button className='btn btn-danger' onClick={() => confirmDelete(notify[0])}>Cancella</button></td>
        </tr>
        ) 
    }
        
   
    return(
        <div className='col-md-8'>
            <table className='table table-bordered table-responsive'>
                <thead>
                    <tr>
                        <th className=''>#</th>
                        <th className=''>Oggetto del messaggio</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
        </div>
    );
}

export default NotifiesTable;