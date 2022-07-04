import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import MainPageContainer from './components/1.Main page/MainPage';
import DenialReason from './components/1.Main page/IPs/DenialReason/DenialReason';
import RegistrationContainer from './components/2.Registration/Registration';
import RegionContainer from './components/2.Registration/Location/Region/Region';
import CitiesContainer from './components/2.Registration/Location/CitiesAndVillages/CitiesAndVillages';
import DistrictContainer from './components/2.Registration/Location/District/District';
import VillageContainer from './components/2.Registration/Location/Village/Village';
import TaxesContainer from './components/2.Registration/Taxes/Taxes';
import ActivityContainer from './components/2.Registration/EconomActivity/EconomActivity';
import AddressTypeContainer from './components/2.Registration/AddressType/AddressType';
import InformationContainer from './components/3. Information/Information';
import SuccessContainer from './common/Success/Success';
import ErrorResponseContainer from './common/ErrorResponse/ErrorResponse';

function App() {
    return (
        <Router>   
          <Routes>
                <Route path='/ind-ent' element={<MainPageContainer /> }/>
                <Route path='ind-ent/denialReason' element={<DenialReason /> }/>
                <Route path='ind-ent/registration' element={<RegistrationContainer /> }/>
                <Route path='ind-ent/region' element={<RegionContainer /> }/>
                <Route path='ind-ent/cities' element={<CitiesContainer /> }/>
                <Route path='ind-ent/district' element={<DistrictContainer /> }/>
                <Route path='ind-ent/village' element={<VillageContainer /> }/>
                <Route path='ind-ent/addressType' element={<AddressTypeContainer /> }/>
                <Route path='ind-ent/activity' element={<ActivityContainer /> }/>
                <Route path='ind-ent/taxes' element={<TaxesContainer /> }/>
                <Route path='ind-ent/information' element={<InformationContainer /> }/>
                <Route path='ind-ent/success' element={<SuccessContainer /> }/>
                <Route path='ind-ent/error' element={<ErrorResponseContainer /> }/>
          </Routes>
      </Router>
    );
}

export default App;