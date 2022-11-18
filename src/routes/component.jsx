import {Route, Routes} from "react-router-dom";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";


const JobApp = () => {
    return (
      <Routes>
        <Route path="/" element={<Jobs/>}/>
        <Route path=":jobId" element={<JobDetails/>}/>
        <Route
          path="*"
          element={
            <main style={{padding: "1rem"}}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    )
  }
  
  export default JobApp;