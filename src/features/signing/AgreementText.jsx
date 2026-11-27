import { Card, Line } from '../../ui/Kit';
import InstallmentList from '../repayment/InstallmentList';

export default function AgreementText({ document }) {
  return <>
    <Card title="금전 차용 약정">
      {document.clauses.map(([caption,value])=><Line key={caption} caption={caption} value={value}/>)}
    </Card>
    <InstallmentList terms={document.terms}/>
  </>;
}
