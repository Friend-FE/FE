import { Route, Routes } from 'react-router-dom'

import Apply from './pages/MatchApply/Apply';
import CertifyBeginning from './pages/Certify/CertifyBeginning';
import CertifyEmail from './pages/Certify/CertifyEmail';
import CertifyEnd from './pages/Certify/CertifyEnd';
import DeactivateAccount from './components/MyPage_Component/DeactivateAccount';
import FindID from './pages/FindAccount/FindID';
import FindPassword from './pages/FindAccount/FindPassword';
import JudgePage from './components/JudgePage/JudgePage';

import Header from './components/header';
import Login from './pages/Login/Login';
import MainPage from './pages/Main/MainPage';
import ManagerPage from './components/ManagerPage_Component/ManagerPage';
import MatchingAHDetail from './components/ManagerPage_Component/MatchingAHDetail';
import MatchingApplicationHistory from './components/ManagerPage_Component/MatchingApplicationHistory';
import MatchingCompletionHistory from './components/ManagerPage_Component/MatchingCompletionHistory';
import MatchingHistory from './components/MyPage_Component/MatchingHistory';
import MembershipWithdrawal from './components/MyPage_Component/MembershipWithdrawal';
import ModifyingInfo from './components/MyPage_Component/ModifyingInfo';
import ModifyingManagerInfo from './components/ManagerPage_Component/ModifyingManagerInfo';
import MyPage from './components/MyPage_Component/MyPage';
import NonMannerUsers from './components/MyPage_Component/NonMannerUsers';
import Notice from './pages/Notice/notice';
import NoticeDetail from './pages/Notice/NoticeDetail';
import ProfileCard from './components/MyPage_Component/ProfileCard';
import QnA from './components/ManagerPage_Component/QnA';
import Question from './pages/QnA/qna';
import ReportReceiptHistory from './components/ManagerPage_Component/ReportReceiptHistory';
import Review from './pages/Review/review';
import ReviewDetail from './pages/Review/ReviewDetail';
import ReviewWrite from './pages/Review/write';
import SignupInfo from './pages/Signup/SignupInfo';
import SignupTerms from './pages/Signup/SignupTerms';
import ViewMembershipList from './components/ManagerPage_Component/ViewMembershipList';
import WritingNotices from './components/ManagerPage_Component/WritingNotices';

import Report from './pages/Report/report';
import QuestionWrite from './pages/QnA/qnaWrite'
import QnADetail from './pages/QnA/qnaDetail'
import ReportReceiptHistoryDetail from './components/ManagerPage_Component/ReportReceiptHistoryDetail'
import QnAResponse from './pages/QnA/qnaResponse'
import Signup from './pages/Signup/Signup';

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
				<Route path="/MyPage/NonMannerUsers/Report" element={<Report/>}/>


				<Route path="/ManagerPage" element={<ManagerPage/>}/>
				<Route path="/ManagerPage/MatchingApplicationHistory" element={<MatchingApplicationHistory/>}/>
				<Route path="/ManagerPage/MatchingApplicationHistory/MatchingAHDetail" element={<MatchingAHDetail/>}/>
				<Route path="/ManagerPage/MatchingCompletionHistory" element={<MatchingCompletionHistory/>}/>
				<Route path="/ManagerPage/ModifyingManagerInfo" element={<ModifyingManagerInfo/>}/>
				
				<Route path="/ManagerPage/QnA" element={<QnA/>}/>
				<Route path="/ManagerPage/QnA/QnAResponse" element={<QnAResponse/>}/>


				<Route path="/ManagerPage/ReportReceiptHistory" element={<ReportReceiptHistory/>}/>
				<Route path="/ManagerPage/ReportReceiptHistory/:id" element={<ReportReceiptHistoryDetail/>}/>
				
				<Route path="/ManagerPage/ViewMembershipList" element={<ViewMembershipList/>}/>
				<Route path="/ManagerPage/WritingNotices" element={<WritingNotices/>}/>

				<Route path="/Login" element={<Login/>}/> 
				<Route path="/CertifyBeginning" element={<CertifyBeginning/>}/> 
				<Route path="/CertifyEmail" element={<CertifyEmail/>}/> 
				<Route path="/CertifyEnd" element={<CertifyEnd/>}/> 
				<Route path="/SignupInfo" element={<Signup/>}/> 
				<Route path="/SignupTerms" element={<SignupTerms/>}/> 
				<Route path="/FindID" element={<FindID/>}/> 
				<Route path="/FindPassword" element={<FindPassword/>}/> 


				<Route path="/JudgePage" element={<JudgePage/>}/> 

				<Route path="/reviews" element={<Review/>}/> 
				<Route path="/reviews/:id" element={<ReviewDetail/>} />
				<Route path="/reviews/write" element={<ReviewWrite />}/>

				<Route path="/notice" element={<Notice/>} />
				<Route path="/notice/:id" element={<NoticeDetail/>} />

				<Route path="/QnA" element={<Question/>} />
				<Route path="/QnA/:id" element={<QnADetail/>} />
				<Route path="/QnA/write" element={<QuestionWrite/>} />

				<Route path="/Apply" element={<Apply/>}/>
			</Routes>
	  </div>
	);
  }

export default App;