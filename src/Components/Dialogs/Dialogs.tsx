import React from 'react';
import classes from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>
                    Viktor Tsoy
                </div>
                <div className={classes.dialog}>
                    Corey Taylor
                </div>
                <div className={classes.dialog}>
                    Jared Leto
                </div>
                <div className={classes.dialog}>
                    Hoy
                </div>
                <div className={classes.dialog}>
                    Misha Gorshnev
                </div>
                <div className={classes.dialog}>
                    Tim McIlrath
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Answer your phone</div>
                <div className={classes.message}>Add me to your friend =)</div>
                <div className={classes.message}>Do you remember anything from the last party?</div>
            </div>
        </div>
    );
};

