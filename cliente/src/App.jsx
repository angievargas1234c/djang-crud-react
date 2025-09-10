import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskPage } from "./pages/taskPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">{/* //mx-auto para que este centrado */}
        <Navigation />
        <Routes>
          <Route path="/" element={< Navigate to="Task" />} />
          <Route path="/Task" element={<TaskPage />} />
          <Route path="/Task-create" element={<TaskFormPage />} />
          <Route path="/Task/:id" element={<TaskFormPage />} />

        </Routes>
        <Toaster />
      </div>
      
    </BrowserRouter>
  );
}

export default App;


