import { IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function DownloadButton({ id }) {

  const handleDownload = () => {

    window.open(
      `http://127.0.0.1:8000/resume/download/${id}`,
      "_blank"
    );

  };

  return (
    <IconButton
      color="success"
      onClick={handleDownload}
    >
      <DownloadIcon />
    </IconButton>
  );

}

export default DownloadButton;