import { Routes, Route } from 'react-router-dom'

import MyPage from './components/MyPage_Component/MyPage';
import DeactivateAccount from './components/MyPage_Component/DeactivateAccount';
import MatchingHistory from './components/MyPage_Component/MatchingHistory';
import MembershipWithdrawal from './components/MyPage_Component/MembershipWithdrawal';
import ModifyingInfo from './components/MyPage_Component/ModifyingInfo';
import ProfileCard from './components/MyPage_Component/ProfileCard';
import MainPage from './pages/mainPage';
import Header from './components/header';
import Footer from './components/footer';

import Login from './pages/Login/Login';
import CertifyBeginning from './pages/Certify/CertifyBeginning';
import CertifyEmail from './pages/Certify/CertifyEmail';
import CertifyEnd from './pages/Certify/CertifyEnd';
import SignupInfo from './pages/Signup/SignupInfo';
import SignupTerms from './pages/Signup/SignupTerms';
import FindID from './pages/FindAccount/FindID';
import FindPassword from './pages/FindAccount/FindPassword';

const App = ()=>{
	return (
	  <div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/MyPage" element={<MyPage/>}/>

				<Route path="/MyPage/DeactivateAccount" element={<DeactivateAccount/>}/>
				<Route path="/MyPage/MatchingHistory" element={<MatchingHistory/>}/>
				<Route path="/MyPage/MembershipWithdrawal" element={<MembershipWithdrawal/>}/>
				<Route path="/MyPage/ModifyingInfo" element={<ModifyingInfo/>}/>
				<Route path="/MyPage/ProfileCard" element={<ProfileCard/>}/>

				<Route path="/Login" element={<Login/>}/> 
				<Route path="/CertifyBeginning" element={<CertifyBeginning/>}/> 
				<Route path="/CertifyEmail" element={<CertifyEmail/>}/> 
				<Route path="/CertifyEnd" element={<CertifyEnd/>}/> 
				<Route path="/SignupInfo" element={<SignupInfo/>}/> 
				<Route path="/SignupTerms" element={<SignupTerms/>}/> 
				<Route path="/FindID" element={<FindID/>}/> 
				<Route path="/FindPassword" element={<FindPassword/>}/> 
			</Routes>
			<Footer></Footer>
	  </div>
	);
  }

export default App;