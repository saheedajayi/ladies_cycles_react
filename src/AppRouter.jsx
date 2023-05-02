import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenstrualCycleForm from "./components/MenstrualCycleForm.jsx";
import MenstrualCycleApp from "./components/MenstrualCycleApp.jsx";


function AppRouter(){
    return (
        <div className="AppRouter">
            <Router>
                <Routes>
                    <Route path="/" element={<MenstrualCycleForm/>}/>
                    <Route path="/cycles/:ladyId" element={<MenstrualCycleApp/>}/>
                </Routes>

            </Router>

        </div>
    )
}

export default AppRouter