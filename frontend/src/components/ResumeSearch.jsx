import { TextField } from "@mui/material";

function ResumeSearch({ search, setSearch }) {

    return (

        <TextField
            fullWidth
            label="Search Resume"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

    );

}

export default ResumeSearch;