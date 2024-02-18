import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Header from './components/header';

import MainPage from './pages/Main/MainPage';

import MyPage from './components/MyPage_Component/MyPage';
import ModifyingInfo from './components/MyPage_Component/ModifyingInfo';
import MatchingHistory from './components/MyPage_Component/MatchingHistory';
import ProfileCard from './components/MyPage_Component/ProfileCard';
import DeactivateAccount from './components/MyPage_Component/DeactivateAccount';
import MembershipWithdrawal from './components/MyPage_Component/MembershipWithdrawal';
import NonMannerUsers from './components/MyPage_Component/NonMannerUsers';

import Report from './pages/Report/report';

import ManagerPage from './components/ManagerPage_Component/ManagerPage';

import QnAResponse from './components/ManagerPage_Component/qnaResponse';
import ManagerQnA from './components/ManagerPage_Component/QnA';
import ManagerQnADetail from './components/ManagerPage_Component/qnaDetail';

import ManagerNotice from './components/ManagerPage_Component/ManagerNotice';
import ManagerNoticeDetail from './pages/Notice/ManagerNoticeDetail';
import WritingNotices from './components/ManagerPage_Component/WritingNotices';
import ModifyNotice from './pages/Notice/ModifyNotice';

import ManagerReview from './components/ManagerPage_Component/ManagerReview';
import ManagerReviewDetail from './components/ManagerPage_Component/ManagerReviewDetail';

import ReportReceiptHistory from './components/ManagerPage_Component/ReportReceiptHistory';
import ReportReceiptHistoryDetail from './components/ManagerPage_Component/ReportReceiptHistoryDetail'

import MatchingApplicationHistoryWoman from './components/ManagerPage_Component/MatchingApplicationHistoryWoman';
import MatchingAHDetailWoman from './components/ManagerPage_Component/MatchingAHDetailWoman';
import MatchingApplicationHistoryMan from './components/ManagerPage_Component/MatchingApplicationHistoryMan';
import MatchingAHDetailMan from './components/ManagerPage_Component/MatchingAHDetailMan';

import MatchingCompletionHistory from './components/ManagerPage_Component/MatchingCompletionHistory';

import ViewMembershipList from './components/ManagerPage_Component/ViewMembershipList';
import ViewMembershipDetail from './components/ManagerPage_Component/ViewMembershipDetail';

import ApplicationForMembership from './pages/ApplicationForMembership/ApplicationForMembership';
import ApplicationForMembershipDetail from './pages/ApplicationForMembership/ApplicationForMembershipDetail'

import Login from './pages/Login/Login';
import FindID from './pages/FindAccount/FindID';
import FindPassword from './pages/FindAccount/FindPassword';

import CertifyBeginning from './pages/Certify/CertifyBeginning';
import CertifyEmail from './pages/Certify/CertifyEmail';
import CertifyEnd from './pages/Certify/CertifyEnd';

import SignupTerms from './pages/Signup/SignupTerms';
import SignupInfo from './pages/Signup/SignupInfo';

import JudgePage from './components/JudgePage/JudgePage';

import Review from './pages/Review/review';
import ReviewDetail from './pages/Review/ReviewDetail';
import ReviewWrite from './pages/Review/write';

import Notice from './pages/Notice/notice';
import NoticeDetail from './pages/Notice/NoticeDetail';

import Question from './pages/QnA/qna';
import QnADetail from './pages/QnA/qnaDetail';
import QuestionWrite from './pages/QnA/qnaWrite';

import Apply from './pages/MatchApply/Apply';
import ManagerHeader from './components/header/manager_header';



const App = ()=>{
	const id = useSelector(state => state.login.id);
	let isManager = false;
	if(id === 47){
	  isManager = true;
	}
	return (
	  <div>
			{isManager? <ManagerHeader/> : <Header/>}
			<Routes>

				{/* 메인 페이지 */}
				<Route path="/" element={<MainPage/>}/>

				{/* 마이 페이지 
					회원정보 수정
					매칭 내역
					내 프로필 카드 확인하기
					계정 비활성화
					회원 탈퇴
					비매너 유저 신고하기

					비매너 유저 신고하기 - 더 자세한 신고 내용 입력
				*/}
				<Route path="/MyPage" element={<MyPage/>}/>
				<Route path="/MyPage/ModifyingInfo" element={<ModifyingInfo/>}/>
				<Route path="/MyPage/MatchingHistory" element={<MatchingHistory/>}/>
				<Route path="/MyPage/ProfileCard" element={<ProfileCard/>}/>
				<Route path="/MyPage/DeactivateAccount" element={<DeactivateAccount/>}/>
				<Route path="/MyPage/MembershipWithdrawal" element={<MembershipWithdrawal/>}/>
				<Route path="/MyPage/NonMannerUsers" element={<NonMannerUsers/>}/>

				<Route path="/MyPage/NonMannerUsers/Report" element={<Report/>}/>

				{/* 관리자 페이지

					Q&A 모아보기 (관리자 페이지 거임!!)
					관리자 페이지 - Q&A 모아보기 - 자세히 보기
					Q&A 답변하기

					공지사항
					공지사항 자세히
					공지사항 쓰러가기

					솔직후기
					솔직후기 자세히

					신고 접수 내역
					신고 접수 내역 자세히

					매칭 신청 내역 - 여자
					매칭 신청 내역 보기 2
					매칭 신청 내역 - 남자
					매칭 신청 내역 보기 4

					매칭 완료 내역

					회원 목록 보기
					회원 목록 보기 자세히

					회원 가입 신청 내역 보기
					회원 가입 신청 내용 자세히 보기
				*/}
				<Route path="/ManagerPage" element={<ManagerPage/>}/>

				<Route path="/ManagerPage/QnA" element={<ManagerQnA/>}/>
				<Route path="/ManagerPage/QnA/:id" element={<ManagerQnADetail/>}/>
				<Route path="/ManagerPage/QnA/QnAResponse/:id" element={<QnAResponse/>}/>
				
				<Route path="/ManagerPage/Notices" element={<ManagerNotice/>}/>
				<Route path="/ManagerPage/Notice/:id" element={<ManagerNoticeDetail/>}/>
				<Route path="/ManagerPage/WritingNotices" element={<WritingNotices/>}/>
				<Route path="/ManagerPage/ModifyNotice" element={<ModifyNotice/>}/>
				
				<Route path="/ManagerPage/Review" element={<ManagerReview/>}/>
				<Route path="/ManagerPage/Review/reviews/:id" element={<ManagerReviewDetail/>}/>

				<Route path="/ManagerPage/ReportReceiptHistory" element={<ReportReceiptHistory/>}/>
				<Route path="/ManagerPage/ReportReceiptHistory/:id" element={<ReportReceiptHistoryDetail/>}/>
				
				<Route path="/ManagerPage/MatchingApplicationHistoryWoman" element={<MatchingApplicationHistoryWoman/>}/>
				<Route path="/ManagerPage/MatchingAHDetailWoman/:id" element={<MatchingAHDetailWoman/>}/>
				<Route path="/ManagerPage/MatchingApplicationHistoryMan" element={<MatchingApplicationHistoryMan/>}/>
				<Route path="/ManagerPage/MatchingAHDetailMan/:id" element={<MatchingAHDetailMan/>}/>
				
				<Route path="/ManagerPage/MatchingCompletionHistory" element={<MatchingCompletionHistory/>}/>

				<Route path="/ManagerPage/ViewMembershipList" element={<ViewMembershipList/>}/>				
				<Route path="/ManagerPage/ViewMembershipList/ViewMembershipDetail/:id" element={<ViewMembershipDetail/>}/>				
				
				<Route path="/ManagerPage/ApplicationForMembership" element={<ApplicationForMembership/>}/>				
				<Route path="/ManagerPage/ApplicationForMembership/:email" element={<ApplicationForMembershipDetail/>}/>				

				{/* 로그인
					아이디 찾기
					비밀번호 찾기

					회원가입
					부경대 학생 인증 - 1
					부경대 학생 인증 - 2

					회원가입 - 2
					회원가입 - 3

					마이페이지 - 심사 중 페이지
				*/}
				<Route path="/Login" element={<Login/>}/> 
				<Route path="/FindID" element={<FindID/>}/> 
				<Route path="/FindPassword" element={<FindPassword/>}/> 

				<Route path="/CertifyBeginning" element={<CertifyBeginning/>}/> 
				<Route path="/CertifyEmail" element={<CertifyEmail/>}/> 
				<Route path="/CertifyEnd" element={<CertifyEnd/>}/> 

				<Route path="/SignupTerms" element={<SignupTerms/>}/>
				<Route path="/SignupInfo" element={<SignupInfo/>}/>

				<Route path="/JudgePage" element={<JudgePage/>}/> 

				{/* 솔직후기
					솔직후기 - 자세히
					솔직후기 - 글 작성하기

					공지사항
					공지사항 - 자세히

					Q&A (이용자가 헤더에서 접근하는 경우)
					Q&A - 자세히 (이용자가 접근하는 경우)
					Q&A - 글 작성 (이용자가 질문 남기는 경우)

					매칭신청 - 매칭신청 완료 팝업
				*/}
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