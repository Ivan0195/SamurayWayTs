import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react';

export type ProfileStatusPropsType = {
    status: string
    updateStatus: (status:string) => void
}

const ProfileStatus = (props:ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const [status, setStatus] = useState<string>(props.status)

   const onChangeStatus = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
   }
   useEffect(() => setStatus(props.status),[props.status])

    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={()=>setEditMode(true)}>{!props.status ? 'no status' : props.status}</span>
                </div>
                :  <div >
                    <input onChange={onChangeStatus} autoFocus={true} onBlur={()=> {
                        setEditMode(false)
                        props.updateStatus(status)
                    }} value={status}/>
                </div>
            }
        </div>

    );
};

export default ProfileStatus;