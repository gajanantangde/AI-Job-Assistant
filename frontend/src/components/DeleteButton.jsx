import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteButton({ onDelete }) {
  return (
    <IconButton
      color="error"
      onClick={onDelete}
    >
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteButton;