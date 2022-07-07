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
import InfoContainer from './components/1.Main page/Info/Info';

function App() {
    return (
        <Router>   
          <Routes>
                <Route path='/ie-register' element={<MainPageContainer /> }/>
                <Route path='ie-register/denialReason' element={<DenialReason /> }/>
                <Route path='ie-register/registration' element={<RegistrationContainer /> }/>
                <Route path='ie-register/region' element={<RegionContainer /> }/>
                <Route path='ie-register/cities' element={<CitiesContainer /> }/>
                <Route path='ie-register/district' element={<DistrictContainer /> }/>
                <Route path='ie-register/village' element={<VillageContainer /> }/>
                <Route path='ie-register/addressType' element={<AddressTypeContainer /> }/>
                <Route path='ie-register/activity' element={<ActivityContainer /> }/>
                <Route path='ie-register/taxes' element={<TaxesContainer /> }/>
                <Route path='ie-register/information' element={<InformationContainer /> }/>
                <Route path='ie-register/success' element={<SuccessContainer /> }/>
                <Route path='ie-register/error' element={<ErrorResponseContainer /> }/>
                <Route path='ie-register/info' element={<InfoContainer /> }/>
          </Routes>
      </Router>
    );
}

export default App;