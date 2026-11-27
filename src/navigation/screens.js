import OperationsDashboard from '../features/admin/OperationsDashboard';
import LenderInbox from '../features/notifications/LenderInbox';
import PaidInFull from '../features/repayment/PaidInFull';
import ReminderPreview from '../features/repayment/ReminderPreview';
import ReminderSettings from '../features/repayment/ReminderSettings';
import Calendar from '../features/repayment/Calendar';
import Receipt from '../features/repayment/Receipt';
import PaymentCheck from '../features/repayment/PaymentCheck';
import Ledger from '../features/repayment/Ledger';
import SendLoan from '../features/funding/SendLoan';
import Evidence from '../features/signing/Evidence';
import Signature from '../features/signing/Signature';
import OriginalAgreement from '../features/signing/OriginalAgreement';
import ReviewAgreement from '../features/signing/ReviewAgreement';
import LenderSafety from '../features/signing/LenderSafety';
import RemoteEvidence from '../features/remote/RemoteEvidence';
import SigningProgress from '../features/remote/SigningProgress';
import OpenInvitation from '../features/remote/OpenInvitation';
import SendInvitation from '../features/remote/SendInvitation';
import ScanQr from '../features/connection/ScanQr';
import ShowQr from '../features/connection/ShowQr';
import Connection from '../features/connection/Connection';
import LenderHome from '../features/home/LenderHome';
import LinkAccount from '../features/onboarding/LinkAccount';
import Identity from '../features/onboarding/Identity';
import BorrowerOverdue from '../features/overdue/BorrowerOverdue';
import EndNegotiation from '../features/negotiation/EndNegotiation';
import AmendmentHistory from '../features/amendments/AmendmentHistory';
import ReviewAmendment from '../features/amendments/ReviewAmendment';
import AmendmentComplete from '../features/amendments/AmendmentComplete';
import DeclineReason from '../features/amendments/DeclineReason';
import DeclinedAmendment from '../features/amendments/DeclinedAmendment';
import EditAmendment from '../features/amendments/EditAmendment';
import Collection from '../features/overdue/Collection';
import LegalGuide from '../features/overdue/LegalGuide';
import EvidenceDraft from '../features/overdue/EvidenceDraft';
import ChooseProcedure from '../features/overdue/ChooseProcedure';
import Counsel from '../features/overdue/Counsel';
import PrepareCounsel from '../features/overdue/PrepareCounsel';
import PaymentOrder from '../features/overdue/PaymentOrder';
import MatchDeposit from '../features/repayment/MatchDeposit';
import Repay from '../features/repayment/Repay';
import PaymentComplete from '../features/repayment/PaymentComplete';
import S1Error from '../features/onboarding/S1Error';
import S2Error from '../features/onboarding/S2Error';
import S3Error from '../features/home/S3Error';
import S4Error from '../features/connection/S4Error';
import BorrowerHome from '../features/home/BorrowerHome';
import ReceiveLoan from '../features/funding/ReceiveLoan';
import LenderOverdue from '../features/overdue/LenderOverdue';
import BorrowerInbox from '../features/notifications/BorrowerInbox';
import BorrowerOffer from '../features/negotiation/BorrowerOffer';
import LenderCounteroffer from '../features/negotiation/LenderCounteroffer';
import PartialLedger from '../features/repayment/PartialLedger';
import InstallmentComplete from '../features/repayment/InstallmentComplete';
import BorrowerSafety from '../features/signing/BorrowerSafety';
import ReportDeposit from '../features/repayment/ReportDeposit';
import Offer from '../features/negotiation/Offer';
import ReviewOffer from '../features/negotiation/ReviewOffer';
import DetailPending from '../features/funding/DetailPending';
import DetailPaying from '../features/repayment/DetailPaying';
import DetailChange from '../features/amendments/DetailChange';
import DetailLate from '../features/overdue/DetailLate';
import DetailClosed from '../features/repayment/DetailClosed';
import RepaySheet from '../features/repayment/RepaySheet';
import TermsOffer from '../features/negotiation/TermsOffer';
import TermsReview from '../features/negotiation/TermsReview';
import TermsCounter from '../features/negotiation/TermsCounter';
import TermsAmend from '../features/amendments/TermsAmend';
import StopSheet from '../features/negotiation/StopSheet';

export const screens = {
  ADM: { component: OperationsDashboard, title: "운영 대시보드 (웹 · 1440)", group: "admin", role: "admin", width: 1440, node: "5:6" },
  S40: { component: LenderInbox, title: "알림함", group: "notifications", role: "lender", width: 390, node: "55:2" },
  S33: { component: PaidInFull, title: "완납·종결", group: "repayment", role: "both", width: 390, node: "5:444" },
  S21: { component: ReminderPreview, title: "상환 D-3 알림 (잠금화면)", group: "repayment", role: "borrower", width: 390, node: "5:913" },
  S20: { component: ReminderSettings, title: "상환 알림 설정", group: "repayment", role: "borrower", width: 390, node: "5:943" },
  S19: { component: Calendar, title: "상환 캘린더", group: "repayment", role: "lender", width: 390, node: "5:983" },
  S18: { component: Receipt, title: "상환 영수증 · 남은 일정", group: "repayment", role: "both", width: 390, node: "5:1061" },
  S17: { component: PaymentCheck, title: "실시간 상환 체크", group: "repayment", role: "lender", width: 390, node: "5:1105" },
  S16: { component: Ledger, title: "약속 상세 · 상환 원장", group: "repayment", role: "borrower", width: 390, node: "5:1140" },
  S15: { component: SendLoan, title: "체결 완료 → 대여 송금", group: "funding", role: "lender", width: 390, node: "5:1198" },
  S14: { component: Evidence, title: "체결 증명 · 감사추적", group: "signing", role: "both", width: 390, node: "5:1263" },
  S13: { component: Signature, title: "손글씨 서명 · 본인 재인증", group: "signing", role: "both", width: 390, node: "5:1372" },
  S12: { component: OriginalAgreement, title: "전자 차용증 원문", group: "signing", role: "both", width: 390, node: "174:2" },
  S11: { component: ReviewAgreement, title: "양쪽 확인·서명", group: "signing", role: "both", width: 390, node: "5:1548" },
  S10: { component: LenderSafety, title: "서명 전 안전 확인", group: "signing", role: "lender", width: 390, node: "176:2" },
  R4: { component: RemoteEvidence, title: "진행 기록 인증서 (감사 추적)", group: "remote", role: "both", width: 390, node: "5:1905" },
  R3: { component: SigningProgress, title: "서명 진행 상황", group: "remote", role: "lender", width: 390, node: "55:61" },
  R2: { component: OpenInvitation, title: "받은 링크 열기 · 본인인증 (빌리는 사람)", group: "remote", role: "borrower", width: 390, node: "5:2074" },
  R1: { component: SendInvitation, title: "서명 요청 보내기 (빌려주는 사람)", group: "remote", role: "lender", width: 390, node: "5:2123" },
  S6: { component: ScanQr, title: "QR 찍기 + 신호 세기 (빌리는 사람)", group: "connection", role: "borrower", width: 390, node: "5:2182" },
  S5: { component: ShowQr, title: "QR 보여주기 + 블루투스 (빌려주는 사람)", group: "connection", role: "lender", width: 390, node: "5:2215" },
  S4: { component: Connection, title: "체결 방식 고르기 (역할 + 만나서 / 떨어져서)", group: "connection", role: "both", width: 390, node: "182:2" },
  S3: { component: LenderHome, title: "홈 · 약속 목록", group: "home", role: "lender", width: 390, node: "180:2" },
  S2: { component: LinkAccount, title: "계좌 연결 (실명 일치)", group: "onboarding", role: "both", width: 390, node: "178:2" },
  S1: { component: Identity, title: "회원가입 본인인증", group: "onboarding", role: "both", width: 390, node: "177:2" },
  S32: { component: BorrowerOverdue, title: "연체 안내 (빌린 사람)", group: "overdue", role: "borrower", width: 390, node: "54:2" },
  S9: { component: EndNegotiation, title: "협상 종료 · 결렬 (서명 전)", group: "negotiation", role: "both", width: 390, node: "54:60" },
  S24: { component: AmendmentHistory, title: "변경 협의 기록 (역제안 받음)", group: "amendments", role: "borrower", width: 390, node: "67:2" },
  S23: { component: ReviewAmendment, title: "변경 요청 받기 (빌려주는 사람)", group: "amendments", role: "lender", width: 390, node: "71:2" },
  S27: { component: AmendmentComplete, title: "변경 합의 완료", group: "amendments", role: "both", width: 390, node: "71:68" },
  S25: { component: DeclineReason, title: "거절 이유 알려 주기 (빌려주는 사람)", group: "amendments", role: "lender", width: 390, node: "71:122" },
  S26: { component: DeclinedAmendment, title: "거절됨 → 다시 조정 (빌린 사람)", group: "amendments", role: "borrower", width: 390, node: "71:155" },
  S22: { component: EditAmendment, title: "약속 바꾸기 제안 (직접 쓰기, 역제안 겸용)", group: "amendments", role: "both", width: 390, node: "72:2" },
  S31: { component: Collection, title: "연체·회수", group: "overdue", role: "lender", width: 390, node: "118:2" },
  S34: { component: LegalGuide, title: "법적 절차 안내 (빌려준 사람)", group: "overdue", role: "lender", width: 390, node: "118:61" },
  S35: { component: EvidenceDraft, title: "[Agent] 증거 묶음 초안 (빌려준 사람)", group: "overdue", role: "lender", width: 390, node: "118:103" },
  S36: { component: ChooseProcedure, title: "진행 방법 고르기", group: "overdue", role: "lender", width: 390, node: "118:135" },
  S37: { component: Counsel, title: "변호사·법률 상담 연결", group: "overdue", role: "lender", width: 390, node: "118:156" },
  S38: { component: PrepareCounsel, title: "상담 준비 완료", group: "overdue", role: "lender", width: 390, node: "118:187" },
  S39: { component: PaymentOrder, title: "지급명령 신청 안내", group: "overdue", role: "lender", width: 390, node: "118:219" },
  S28: { component: MatchDeposit, title: "거래내역에서 직접 체크 (빌려준 사람)", group: "repayment", role: "lender", width: 390, node: "147:39" },
  S29: { component: Repay, title: "앱으로 갚기 · 송금 (빌린 사람)", group: "repayment", role: "borrower", width: 390, node: "147:106" },
  S30: { component: PaymentComplete, title: "송금 완료 (빌린 사람)", group: "repayment", role: "borrower", width: 390, node: "147:147" },
  S1Error: { component: S1Error, title: "예외 상태", group: "onboarding", role: "both", width: 390, node: "177:48" },
  S2Error: { component: S2Error, title: "예외 상태", group: "onboarding", role: "both", width: 390, node: "178:42" },
  S3Error: { component: S3Error, title: "예외 상태", group: "home", role: "both", width: 390, node: "180:68" },
  S4Error: { component: S4Error, title: "예외 상태", group: "connection", role: "both", width: 390, node: "182:57" },
  S3b: { component: BorrowerHome, title: "홈 · 약속 목록 (빌린 사람 · 이하린)", group: "home", role: "borrower", width: 390, node: "224:2" },
  S15b: { component: ReceiveLoan, title: "돈 받기 (빌린 사람 · 이하린)", group: "funding", role: "borrower", width: 390, node: "224:46" },
  S31b: { component: LenderOverdue, title: "연체 관리 (빌려준 사람 · 박도윤)", group: "overdue", role: "lender", width: 390, node: "225:2" },
  S40b: { component: BorrowerInbox, title: "알림함 (빌린 사람 · 이하린)", group: "notifications", role: "borrower", width: 390, node: "225:40" },
  S7b: { component: BorrowerOffer, title: "제안 받음 (빌린 사람 · 이하린)", group: "negotiation", role: "borrower", width: 390, node: "226:2" },
  S7c: { component: LenderCounteroffer, title: "역제안 받음 (빌려준 사람 · 박도윤)", group: "negotiation", role: "lender", width: 390, node: "226:73" },
  S16b: { component: PartialLedger, title: "약속 상세 · 일부 납부 반영 (빌린 사람 · 이하린)", group: "repayment", role: "borrower", width: 390, node: "246:2" },
  S17b: { component: InstallmentComplete, title: "2회차 완납 확인 (빌려준 사람 · 박도윤)", group: "repayment", role: "lender", width: 390, node: "246:66" },
  S10b: { component: BorrowerSafety, title: "서명 전 안전 확인 (빌린 사람 · 이하린)", group: "signing", role: "borrower", width: 390, node: "246:94" },
  S28b: { component: ReportDeposit, title: "따로 보낸 돈 알리기 (빌린 사람 · 이하린)", group: "repayment", role: "borrower", width: 390, node: "246:176" },
  S7: { component: Offer, title: "조건 제안", group: "negotiation", role: "lender", width: 390, node: "267:2" },
  S8: { component: ReviewOffer, title: "협상·합의", group: "negotiation", role: "borrower", width: 390, node: "267:107" },
  DetailPending: { component: DetailPending, title: "약속 상세 · 송금 대기", group: "funding", role: "lender", width: 390, node: "189:2" },
  DetailPaying: { component: DetailPaying, title: "약속 상세 · 상환 중", group: "repayment", role: "borrower", width: 390, node: "189:69" },
  DetailChange: { component: DetailChange, title: "약속 상세 · 변경 요청 받음", group: "amendments", role: "lender", width: 390, node: "189:142" },
  DetailLate: { component: DetailLate, title: "약속 상세 · 연체", group: "overdue", role: "lender", width: 390, node: "189:220" },
  DetailClosed: { component: DetailClosed, title: "약속 상세 · 완납", group: "repayment", role: "borrower", width: 390, node: "189:287" },
  RepaySheet: { component: RepaySheet, title: "약속 상세 · 갚기 시트", group: "repayment", role: "borrower", width: 390, node: "189:353" },
  TermsOffer: { component: TermsOffer, title: "조건 편집 · 처음 제안", group: "negotiation", role: "lender", width: 390, node: "193:11" },
  TermsReview: { component: TermsReview, title: "조건 편집 · 제안 받음", group: "negotiation", role: "borrower", width: 390, node: "193:132" },
  TermsCounter: { component: TermsCounter, title: "조건 편집 · 역제안 작성", group: "negotiation", role: "both", width: 390, node: "193:246" },
  TermsAmend: { component: TermsAmend, title: "조건 편집 · 약속 바꾸기", group: "amendments", role: "both", width: 390, node: "193:354" },
  StopSheet: { component: StopSheet, title: "조건 편집 · 그만하기 시트", group: "negotiation", role: "both", width: 390, node: "193:442" },
};
