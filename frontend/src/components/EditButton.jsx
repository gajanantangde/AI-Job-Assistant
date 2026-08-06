import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function EditButton({ onClick }) {
  return (
    <IconButton
      color="warning"
      onClick={() => {
        alert("Edit clicked");
        onClick();
      }}
    >
      <EditIcon />
    </IconButton>
  );
}

export default EditButton;