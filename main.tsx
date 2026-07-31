import { Switch, Route } from 'wouter';
import AIFA from '@/pages/AIFA';
import LegalTexts from '@/pages/LegalTexts';
import JudicialPrecedent from '@/pages/JudicialPrecedent';
import Reports from '@/pages/Reports';
import AdministrativeStudies from '@/pages/AdministrativeStudies';
import FinancialStudies from '@/pages/FinancialStudies';
import News from '@/pages/News';
import Login from '@/pages/Login';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={AIFA} />
      <Route path="/aifa" component={AIFA} />
      <Route path="/legal-texts" component={LegalTexts} />
      <Route path="/judicial-precedent" component={JudicialPrecedent} />
      <Route path="/reports" component={Reports} />
      <Route path="/administrative-studies" component={AdministrativeStudies} />
      <Route path="/financial-studies" component={FinancialStudies} />
      <Route path="/news" component={News} />
      <Route path="/login" component={Login} />
      <Route>
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground font-mono text-sm">
          404 — Page not found
        </div>
      </Route>
    </Switch>
  );
}
