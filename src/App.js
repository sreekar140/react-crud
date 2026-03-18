
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import StudentTable from './student_table';
import CreateStudent from './create';
import EditStudent from './edit';
import StudentDetails from './viewdetails';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StudentTable/>}></Route>
      <Route path='/student/create/' element={<CreateStudent></CreateStudent>}></Route>
      <Route path='/student/edit/:studentid' element={<EditStudent/>}></Route>
      <Route path='/student/view/:studentid' element={<StudentDetails/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
