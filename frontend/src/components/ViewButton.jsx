import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ViewButton({ id }) {

    const handleView = () => {

        window.open(
            `http://127.0.0.1:8000/resume/view/${id}`,
            "_blank"
        );

    };

    return (

        <IconButton
            color="primary"
            onClick={handleView}
        >
            <VisibilityIcon />
        </IconButton>

    );

}

export default ViewButton;