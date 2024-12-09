import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #6A1E55",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
  textAlign: "center",
};

const Buy = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="congratulations-modal-title"
      aria-describedby="congratulations-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography
          id="congratulations-modal-title"
          variant="h6"
          component="h2"
          sx={{ color: "#6A1E55", fontWeight: "bold" }}
        >
          🎉 Congratulations! 🎉
        </Typography>
        <Typography
          id="congratulations-modal-description"
          sx={{ mt: 2, fontSize: "16px", color: "#555" }}
        >
          You've successfully purchased your dream car! 🚗✨
        </Typography>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: "#6A1E55",
            "&:hover": { bgcolor: "#3B1C32" },
          }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default Buy;
