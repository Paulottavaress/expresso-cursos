import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

const NotAllowedDialog = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate('');
  const buttonRef = useRef(null);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        ref={buttonRef}
        keepMounted
        onClick={() => navigate('/')}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{'Você não adicionou nenhum curso ao carrinho.'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>Para que você possa fazer sua matrícula, é necessário clicar no botão "COMPRAR" de um dos cursos. Os botões ficam na página inicial do curso ou nas páginas de venda de cada curso.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => navigate('/')}>Ir para página inicial</Button>
        </DialogActions>
      </Dialog>
    </div> 
  );
};

export default NotAllowedDialog;