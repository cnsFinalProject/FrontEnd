export const groups = [
  ['onboarding','가입·인증','S1 S1Error S2 S2Error'],
  ['home','역할별 홈','S3 S3b S3Error'],
  ['connection','만나서 연결','S4 S4Error S5 S6'],
  ['remote','원격 초대와 진행 기록','R1 R2 R3 R4'],
  ['negotiation','조건 제안·역제안','S7 S7b S7c S8 S9 TermsOffer TermsReview TermsCounter StopSheet'],
  ['signing','안전 확인·서명','S10 S10b S11 S12 S13 S14'],
  ['funding','대여 송금·수령','S15 S15b DetailPending'],
  ['repayment','상환·납부 확인','S16 S16b S17 S17b S18 S19 S20 S21 S28 S28b S29 S30 S33 DetailPaying RepaySheet DetailClosed'],
  ['amendments','변경 계약','S22 S23 S24 S25 S26 S27 TermsAmend DetailChange'],
  ['overdue','연체·회수·상담','S31 S31b S32 S34 S35 S36 S37 S38 S39 DetailLate'],
  ['notifications','알림함','S40 S40b'],
];
export function previewDestination(action, role) {
 const lender=role==='lender';
 const map={
  home:lender?'S3':'S3b', portfolio:lender?'DetailPending':'S16', alerts:lender?'S40':'S40b',
  meet:lender?'S5':'S6',remote:lender?'R1':'R2',connected:lender?'S7':'S7b',invite:'R3',
  offer:lender?'S7c':'S8',agree:lender?'S10':'S10b',counter:lender?'S7':'TermsCounter',editTerms:lender?'TermsOffer':'TermsCounter',
  safeNext:'S11',document:'S12',sign:'S14',fund:lender?'S15':'S15b',transfer:'DetailPending',repay:'S30',reportDeposit:'S16b',confirmDeposit:'S17b',
  amend:lender?'DetailChange':'S24',acceptChange:'S27',rejectChange:lender?'S40':'S26',editChange:'TermsAmend',cancel:'S9',records:'S14',settings:lender?'S19':'S20',
  saveSettings:'S40b',otherLoan:'S3',risk:'StopSheet'
 };
 return map[action];
}
