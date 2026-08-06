import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import { deleteResume } from "../services/resumeService";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

import { getAllResumes } from "../services/resumeService";
import ResumeSearch from "./ResumeSearch";
import ViewButton from "./ViewButton";
import DownloadButton from "./DownloadButton";
import EditButton from "./EditButton";
import EditResumeDialog from "./EditResumeDialog";
import { updateResume } from "../services/resumeService";


function ResumeTable() {
  const [search, setSearch] = useState("");
  const [resumes, setResumes] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedResume, setSelectedResume] = useState(null);
  useEffect(() => {
    loadResumes();
  }, []);

  const loadResumes = async () => {
    try {
      const data = await getAllResumes();

      setResumes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?",
    );

    if (!confirmDelete) return;

    try {
      await deleteResume(id);

      loadResumes();
    } catch (error) {
      console.error(error);
    }
  };
  const filteredResumes = resumes.filter(
    (resume) =>
      resume.full_name.toLowerCase().includes(search.toLowerCase()) ||
      resume.email.toLowerCase().includes(search.toLowerCase()) ||
      resume.phone.includes(search),
  );
    const handleEdit = (resume) => {

    setSelectedResume(resume);

    setOpenDialog(true);

    };

    const handleClose = () => {

        setOpenDialog(false);

    };
    const handleSave = async (updatedResume) => {

    try {

        await updateResume(selectedResume.id, {
            ...selectedResume,
            ...updatedResume,
        });

        setOpenDialog(false);

        loadResumes();

    } catch (error) {

        console.error(error);

    }

};
  return (
    <Paper sx={{ mt: 4, p: 2 }}>
      <ResumeSearch search={search} setSearch={setSearch} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredResumes.map((resume) => (
            <TableRow key={resume.id}>
              <TableCell>{resume.id}</TableCell>

              <TableCell>{resume.full_name}</TableCell>

              <TableCell>{resume.email}</TableCell>

              <TableCell>{resume.phone}</TableCell>
              <TableCell>

                    <ViewButton id={resume.id} />

                    <DownloadButton id={resume.id} />

                  <EditButton
                        onClick={() => handleEdit(resume)}
                    />

                    <DeleteButton
                        onDelete={() => handleDelete(resume.id)}
                    />

                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditResumeDialog
            open={openDialog}
            handleClose={handleClose}
            resume={selectedResume}
            onSave={handleSave}
        />
    </Paper>
  );
}

export default ResumeTable;
