import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchIcon from "../../../public/SearchIcon.svg";

import SearchIcon2 from "../../../public/SearchIcon2.svg";
import styles from './SearchModal.module.css'
import {useTranslation} from "react-i18next";
import {useState} from "react";
import i18n from '../LanguageChange/LanguageChange.js';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'transparent',
    border: '2px solid #000',
    borderRadius: '0.5rem',
    boxShadow: 24,
    p: 4,
};

const modal = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}



export default function SearchModal() {

    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "bg" : "en";
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    }




    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <img src={SearchIcon2} alt={"Search icon"} onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps={{
                    style: { backgroundColor: 'transparent' }
                }}

                disableEnforceFocus
                disableScrollLock
            >
                {/*<Box sx={style}>*/}
                    {/*<Typography id="modal-modal-title" variant="h6" component="h2">*/}
                    {/*    {t("Търсене")}*/}
                    {/*</Typography>*/}

                    <Typography style={modal} id="modal-modal-description" sx={{mt: 2}}>
                        <input className={styles.modalInput} type={"text"} placeholder={"Търсене"}/>



                        {/*<select className={styles.modalDropdown}>*/}
                        {/*    <option>{t("Всички")}</option>*/}
                        {/*    <option>{t("Новини и събития")} </option>*/}
                        {/*    <option>{t("Преподаватели и служители")}</option>*/}
                        {/*    <option>{t("Страници")}</option>*/}
                        {/*</select>*/}
                        <button className={styles.modalButton}><img src={SearchIcon} alt={"search icon"}/></button>
                    </Typography>
                {/*</Box>*/}
            </Modal>
        </div>
    );
}
