import { Chip } from "@mui/material";

function StatusChip({ status }) {

    const colors = {

        Applied: "primary",

        Assessment: "secondary",

        Interview: "warning",

        "HR Round": "info",

        Offer: "success",

        Rejected: "error",

        Joined: "success",

    };

    return (

        <Chip
            label={status}
            color={colors[status] || "default"}
            size="small"
        />

    );

}

export default StatusChip;