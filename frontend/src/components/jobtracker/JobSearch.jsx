import { TextField } from "@mui/material";

function JobSearch({
    search,
    setSearch,
}) {

    return (

        <TextField
            fullWidth
            label="Search Company, Job or Status"
            margin="normal"
            value={search}
            onChange={(e) =>
                setSearch(e.target.value)
            }
        />

    );

}

export default JobSearch;