import { Routes, Route } from 'react-router-dom'

import MyPage from './components/MyPage_Component/MyPage';
import DeactivateAccount from './components/MyPage_Component/DeactivateAccount';
import MatchingHistory from './components/MyPage_Component/MatchingHistory';
import MembershipWithdrawal from './components/MyPage_Component/MembershipWithdrawal';
import ModifyingInfo from './components/MyPage_Component/ModifyingInfo';
import ProfileCard from './components/MyPage_Component/ProfileCard';
import NonMannerUsers from './components/MyPage_Component/NonMannerUsers';

import ManagerPage from './components/ManagerPage_Component/ManagerPage';
import MatchingApplicationHistory from './components/ManagerPage_Component/MatchingApplicationHistory';
import MatchingCompletionHistory from './components/ManagerPage_Component/MatchingCompletionHistory';
import ModifyingManagerInfo from './components/ManagerPage_Component/ModifyingManagerInfo';
import QnA from './components/ManagerPage_Component/QnA';
import ReportReceiptHistory from './components/ManagerPage_Component/ReportReceiptHistory';
import ViewMembershipList from './components/ManagerPage_Component/ViewMembershipList';
import WritingNotices from './components/ManagerPage_Component/WritingNotices';
import MatchingAHDetail from './components/ManagerPage_Component/MatchingAHDetail';

import MainPage from './pages/Main/MainPage';
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

				<Route path="/MyPage/NonMannerUsers" element={<NonMannerUsers/>}/>

				<Route path="/ManagerPage" element={<ManagerPage/>}/>
				<Route path="/ManagerPage/MatchingApplicationHistory" element={<MatchingApplicationHistory/>}/>
				<Route path="/ManagerPage/MatchingApplicationHistory/MatchingAHDetail" element={<MatchingAHDetail/>}/>
				<Route path="/ManagerPage/MatchingCompletionHistory" element={<MatchingCompletionHistory/>}/>
				<Route path="/ManagerPage/ModifyingManagerInfo" element={<ModifyingManagerInfo/>}/>
				<Route path="/ManagerPage/QnA" element={<QnA/>}/>
				<Route path="/ManagerPage/ReportReceiptHistory" element={<ReportReceiptHistory/>}/>
				<Route path="/ManagerPage/ViewMembershipList" element={<ViewMembershipList/>}/>
				<Route path="/ManagerPage/WritingNotices" element={<WritingNotices/>}/>

				<Route path="/Login" element={<Login/>}/> 
				<Route path="/CertifyBeginning" element={<CertifyBeginning/>}/> 
				<Route path="/CertifyEmail" element={<CertifyEmail/>}/> 
				<Route path="/CertifyEnd" element={<CertifyEnd/>}/> 
				<Route path="/SignupInfo" element={<SignupInfo/>}/> 
				<Route path="/SignupTerms" element={<SignupTerms/>}/> 
				<Route path="/FindID" element={<FindID/>}/> 
				<Route path="/FindPassword" element={<FindPassword/>}/> 
			</Routes>
	  </div>
	);
  }

export default App;