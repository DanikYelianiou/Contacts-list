import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
    onSubmit: Function
    text: string
}

const Button = ({onSubmit, text}: ButtonProps) => {
    
    return (
        <button 
            className={
                text === "authentication" ? styles.button : 
                text === "delete" ? styles.button_delete :
                text === "Add contact" ? styles.button_add :
                text === "update" ? styles.button_update :
                text === "Update contact" && styles.button_update_contact
            }
            onClick={() => onSubmit()}
        >
            {text}
        </button>
    )
}

export default Button