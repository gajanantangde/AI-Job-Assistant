import JobApplicationForm from "../components/jobtracker/JobApplicationForm";
import JobApplicationTable from "../components/jobtracker/JobApplicationTable";

function JobTracker() {

    return (

        <div className="main-content">

            <h1 className="page-title">
                Job Tracker
            </h1>

            <JobApplicationForm />

            <JobApplicationTable />

        </div>

    );

}

export default JobTracker;