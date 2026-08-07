import { useEffect, useState } from "react";

import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import {
  getAllApplications,
  deleteApplication,
} from "../../services/jobApplicationService";

import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import EditJobDialog from "./EditJobDialog";
import JobSearch from "./JobSearch";
import StatusChip from "../common/StatusChip";
import ConfirmDialog from "../common/ConfirmDialog";



function JobApplicationTable() {

  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);

  const [selectedApplication, setSelectedApplication] =
    useState(null);
const [confirmOpen, setConfirmOpen] = useState(false);
const [deleteId, setDeleteId] = useState(null);
  useEffect(() => {

    loadApplications();

  }, []);

  const loadApplications = async () => {

    try {

      const data = await getAllApplications();

      setApplications(data);

    } catch (error) {

      console.error(error);

    }

  };

  const handleDeleteClick = (id) => {

  setDeleteId(id);

  setConfirmOpen(true);

};

const handleDeleteConfirm = async () => {

  try {

    await deleteApplication(deleteId);

    loadApplications();

  } catch (error) {

    console.error(error);

  } finally {

    setConfirmOpen(false);

    setDeleteId(null);

  }

};

const handleDeleteCancel = () => {

  setConfirmOpen(false);

  setDeleteId(null);

};

  const handleEdit = (application) => {

    setSelectedApplication(application);

    setOpen(true);

  };

  const handleClose = () => {

    setOpen(false);

    setSelectedApplication(null);

  };

  const filteredApplications = applications.filter(
    (application) =>

      application.company
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      application.job_title
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      application.status
        .toLowerCase()
        .includes(search.toLowerCase())

  );

  return (

    <Paper sx={{ p: 2 }}>

      <JobSearch
        search={search}
        setSearch={setSearch}
      />

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>Company</TableCell>

            <TableCell>Job Title</TableCell>

            <TableCell>Status</TableCell>

            <TableCell>Applied Date</TableCell>

            <TableCell>Actions</TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {filteredApplications.map((application) => (

            <TableRow key={application.id}>

              <TableCell>

                {application.company}

              </TableCell>

              <TableCell>

                {application.job_title}

              </TableCell>

              <TableCell>

                <StatusChip
                    status={application.status}
                />

              </TableCell>

              <TableCell>

                {application.application_date}

              </TableCell>

              <TableCell>

                <EditButton
                  onClick={() => handleEdit(application)}
                />

           <DeleteButton
            onDelete={() => handleDeleteClick(application.id)}
            />

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

        <EditJobDialog
        open={open}
        handleClose={handleClose}
        application={selectedApplication}
        onUpdated={loadApplications}
      />
        <ConfirmDialog
        open={confirmOpen}
        title="Delete Application"
        message="Are you sure you want to delete this job application?"
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        />
    </Paper>

  );

}

export default JobApplicationTable;