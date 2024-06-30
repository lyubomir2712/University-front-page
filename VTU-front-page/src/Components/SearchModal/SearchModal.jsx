import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchIcon from "../../../public/SearchIcon.svg";

import SearchIconIcon from "../../../public/SearchIcon.svg";
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
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '0.5rem',
    boxShadow: 24,
    p: 4,
};

const modal = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
            <img src={SearchIcon} alt={"Search icon"} onClick={handleOpen} />
            {/*<Button onClick={handleOpen}>Open modal</Button>*/}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {t("Търсене")}
                    </Typography>
                    <Typography style={modal} id="modal-modal-description" sx={{mt: 2}}>
                        <input className={styles.modalInput} type={"text"}/>
                        <select className={styles.modalDropdown}>
                            <option>{t("Всички")}</option>
                            <option>{t("Новини и събития")} </option>
                            <option>{t("Преподаватели и служители")}</option>
                            <option>{t("Страници")}</option>
                        </select>
                        <button className={styles.modalButton}><img src={SearchIcon} alt={"search icon"}/></button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
