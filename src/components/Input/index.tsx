import React from "react";

import styles from "./Input.module.scss";

interface InputProps {
    placeholder: string
    type?: string
    onChange:Function
    value:string
}

const Input = ({
    placeholder,
    type,
    onChange,
    value
}: InputProps) => {

    return (
        <div className={styles.input__inner}>
            {type === "email" &&
                <input 
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    type="email"
                    className={styles.input__container}
                    value={value}
                />
            }
            {type === "password" &&
                <input 
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    type="password"
                    className={styles.input__container}
                    value={value}
                />
            }
            {!type &&
                <input 
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    className={styles.input__container}
                    value={value}
                />
            }
        </div>
    )
}

export default Input