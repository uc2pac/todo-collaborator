import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ShareDialog({ isOpen, onClose }) {
const onDialogClose = () => {
    onClose(false);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={onDialogClose}>
        <DialogTitle>Share todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To share todo, please enter email address of the person you want to share with.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onDialogClose}>Cancel</Button>
          <Button onClick={onDialogClose}>Share</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}