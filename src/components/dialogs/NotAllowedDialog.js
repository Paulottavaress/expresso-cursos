import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate, createSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlertContext from '../../context/alert/alertContext';

const NotAllowedDialog = ({ dialog }) => {
  const alertContext = useContext(AlertContext);
  const { switchNotAllowedDialog } = alertContext;

  const navigate = useNavigate('');
  const {
    dialogTitle,
    dialogText,
    dialogBtnText,
    redirectTo,
    scrollTo
  } = dialog;

  const onClick = () => {
    switchNotAllowedDialog(null);
    navigate({
      pathname: redirectTo,
      search: `?${createSearchParams(scrollTo)}`
    });
  };

  return (
    <Dialog
      open={true}
      keepMounted
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-slide-description'>{dialogText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClick()}>{dialogBtnText}</Button>
      </DialogActions>
    </Dialog>
  );
};

NotAllowedDialog.propTypes = {
  dialog: PropTypes.object.isRequired
}

export default NotAllowedDialog;