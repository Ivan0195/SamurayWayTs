import React, {useState} from 'react';

export type ProfileStatusPropsType = {
    status: string
}

const ProfileStatus = (props:ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)

    return (
        <div>
            {!editMode
                ? <div>
                    <span onDoubleClick={()=>setEditMode(true)}>{props.status}</span>
                </div>
                :  <div >
                    <input autoFocus={true} onBlur={()=>setEditMode(false)} value={props.status}/>
                </div>
            }
        </div>

    );
};

export default ProfileStatus;