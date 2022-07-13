import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import RegistrationContainer from './components/2.Registration/Registration';
import RegionContainer from './components/2.Registration/Location/Region/Region';
import CitiesContainer from './components/2.Registration/Location/CitiesAndVillages/CitiesAndVillages';
import DistrictContainer from './components/2.Registration/Location/District/District';
import VillageContainer from './components/2.Registration/Location/Village/Village';
import TaxesContainer from './components/2.Registration/Taxes/Taxes';
import ActivityContainer from './components/2.Registration/EconomActivity/EconomActivity';
import AddressTypeContainer from './components/2.Registration/AddressType/AddressType';
import InformationContainer from './components/3. Information/Information';
import InfoContainer from './components/1.Main page/Info/Info';
import DenialReasonContainer from './components/1.Main page/IPs/DenialReason/DenialReason';
import Check from './components/1.Main page/Check/Check';
import ResponseContainer from './common/Resonse/Response';

function App() {
    return (
        <Router>   
          <Routes>
                <Route path='/ie-register' element={<Check /> }/>
                <Route path='ie-register/denialReason' element={<DenialReasonContainer /> }/>
                <Route path='ie-register/registration' element={<RegistrationContainer /> }/>
                <Route path='ie-register/region' element={<RegionContainer /> }/>
                <Route path='ie-register/cities' element={<CitiesContainer /> }/>
                <Route path='ie-register/district' element={<DistrictContainer /> }/>
                <Route path='ie-register/village' element={<VillageContainer /> }/>
                <Route path='ie-register/addressType' element={<AddressTypeContainer /> }/>
                <Route path='ie-register/activity' element={<ActivityContainer /> }/>
                <Route path='ie-register/taxes' element={<TaxesContainer /> }/>
                <Route path='ie-register/information' element={<InformationContainer /> }/>
                <Route path='ie-register/response' element={<ResponseContainer /> }/>
                <Route path='ie-register/info' element={<InfoContainer /> }/>
          </Routes>
      </Router>
    );
}

export default App;