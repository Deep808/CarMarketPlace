// MATERIAL UI MODAL IMPORTS

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const DeleteModal = ({ open, onClose, onConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="bg-white w-fit p-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg shadow-md">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirm Delete
        </Typography>
        <Typography className="!text-[1.2em] !mt-4">
          Are you sure you want to delete this item?
        </Typography>
        <Box className="text-xs mt-4 flex justify-end">
          <Button onClick={onClose} variant="outlined" sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button onClick={onConfirm} variant="contained" color="error">
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
