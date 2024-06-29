import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SearchIcon from "../../../public/SearchIcon.svg";

import AuthenticaitonIcon from "../../../public/AuthenticationIcon.svg";
import styles from './AuthenticationModal.module.css'



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
    flexDirection: 'column',
    alignItems: 'center',
}


export default function AuthenticationModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <img src={AuthenticaitonIcon} alt={"Search icon"} onClick={handleOpen} />
            {/*<Button onClick={handleOpen}>Open modal</Button>*/}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Вход
                        <hr/>
                    </Typography>
                    <Typography style={modal} id="modal-modal-description" sx={{mt: 2}}>
                        <button className={styles.modalButton}>
                            Е-студент
                        </button>
                        {/*<button className={styles.modalButton}>*/}
                        {/*    Е-кандидат студент*/}
                        {/*</button>*/}
                        <button className={styles.modalButton}>
                            E-преподавател
                        </button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
