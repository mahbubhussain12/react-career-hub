import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";
const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams ()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(id)
    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You Have applied successfully')
    }
    return (
        <div>
            <div className="grid mb-10 gap-4 md:grid-cols-4 ">
                <div className="mt-4 p-4 border md:col-span-3">
                    <h2 className="text-2xl font-semibold text-red-400">{job.job_title}</h2>
                    <p className="font-semibold mt-2 ">{job.company_name}</p>
                    <p className="mt-2">{job.job_description}</p>
                    <p className="mt-2">{job.job_responsibility}</p>
                    <p className="mt-2 font-semibold">{job.educational_requirements}</p>
                </div>
                <div className="border bg-slate-50 p-2">
                    <h2 className="text-2xl ">Job Details</h2>
                    <hr />
                    <h2 ><span className="font-bold">Salary: </span>{job.salary}</h2>
                    <h2><span className="font-bold">Job Title: </span>{job.job_title}</h2>
                    <h2 className="font-bold">Contact Information</h2> <hr />
                    <h2>Phone: {job.contact_information.phone}</h2>
                    <h2>Email: {job.contact_information.email}</h2>
                    <h2>Address: {job.contact_information.address}</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full mt-20 ">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;