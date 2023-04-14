import MainPage from './Sources/MainPage';
import { Routes, Route } from 'react-router-dom';
import { VisitCard } from './Sources/VisitCard';
import { Catalog } from './Sources/Catalog';
import { SolderedCoolers } from './Sources/SolderedCoolers';
function App() {
  return (
    <div className="App">
    <Routes>

      <Route path="/" element={<MainPage/>}/>
      <Route path='/VisitCard' element={<VisitCard/>}/>
      <Route path='/Catalog' element={<Catalog/>}/>
      <Route path='/SolderedCoolers' element={<SolderedCoolers/>}/>
      <Route path='*' element={<MainPage/>}/>

    </Routes>
    
    
    </div>
  );
}

export default App;
