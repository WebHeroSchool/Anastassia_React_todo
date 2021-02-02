import React from "react";
import styles from "./Contacts.module.css";

import mail from "./img/mail.svg";
import linkedin from "./img/linkedin.svg";
import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import phone from "./img/phone.svg";

const Contacts = () => {
    return (
        <div className={styles.wrap}>
        <h1 className={styles.title}>My contacts</h1>
            <div className={styles.content}>
                <div className={styles.item}>
                    <img src={mail} alt="e-mail" className={styles.icon} />
                    <a className={styles.links} href='mailto:anastassiavarabei@gmail.com'>anastassiavarabei@gmail.com</a>
                </div>
                <div className={styles.item}>
                    <img src={linkedin} alt="linkedin" className={styles.icon} />
                    <a className={styles.links} href='https://www.linkedin.com/in/anastassia-varabei-22a8b6b8/'>Linkedin</a>
                </div>
                <div className={styles.item}>
                    <img src={telegram} alt="telegram" className={styles.icon} />
                    <a className={styles.links} href='https://t.me/AnastassiaVarabei'>Telegram</a>
                </div>
                <div className={styles.item}>
                    <img src={instagram} alt="instagram" className={styles.icon} />
                    <a className={styles.links} href='https://www.instagram.com/anastasiaablyeva/'>Instagram</a>
                </div>
                <div className={styles.item}>
                    <img src={phone} alt="tel" className={styles.icon} />
                    <p>+375(29)688-04-59</p>
                </div>
            </div>
        </div>
    )
};


export default Contacts;
