import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/index";
import DesignPage from "./components/DesignPage";
import Header from "./components/Header";
import useScrollBeyond from "./hooks/useScrollBeyond";
import Footer from "./components/Footer";
import UniversityPage from "./components/UniversityPage";
import SeniorPage from "./components/SeniorPage";
import LoginPage from "./components/LoginPage";
import GloryPage from "./components/GloryPage";
import { path } from "./Event/fakeData";
import AdditionsPage from "./components/AdditionsPage";
import AchievementsPage from "./components/AchievementsPage";
import MastersGraduatesPage from "./components/MastersGraduatesPage";
import SupportPage from "./components/SupportPage";
import MastersPage from "./components/MastersPage";
import PHDmastersPage from "./components/PHDmastersPage";
import councilPage from "./components/CouncilPage";
import baPlusPage from "./components/BaPlusPage";
import BaProfessionalPage from "./components/BaProfessionalPage";
import MetacodePage from "./components/MetacodePage";
import BootcampPage from "./components/BootcampPage";
import CertificationsPage from "./components/CertificationsPage";
import FastTrackPlanPage from "./components/FastTrackPlanPage";
import CollaborationSpacePage from "./components/CollaborationSpacePage";
import ExecutionProcessPage from "./components/ExecutionProcessPage";
import languageLearningPage from "./components/languageLearningPage";
import DoctorateLanguagePage from "./components/DoctorateLanguagePage";
import ClubPage from "./components/ClubPage";
import OrganizationalLanguageBAPage from "./components/OrganizationalLanguageBAPage";
import OrganizationalLanguagePage from "./components/OrganizationalLanguagePage";
import IELTSPage from "./components/IELTSPage";
import FagPage from "./components/FagPage";
import CurrencyIncomePage from "./components/CurrencyIncomePage";
import CompleteAcademicDocumentPage from "./components/CompleteAcademicDocumentPage";
import BaPage from "./components/BaPage";
import PhdPage from "./components/PHDPage";
import useWidthExceeds from "./hooks/useWidthExceeds ";
import ConsentPage from "./components/ConsentPage";
const componentMapping = {
  home: HomePage,
  design: DesignPage,
  university: UniversityPage,
  senior: SeniorPage,
  login: LoginPage,
  additions: AdditionsPage,
  glory: GloryPage,
  achievements: AchievementsPage,
  mastersGraduates: MastersGraduatesPage,
  support: SupportPage,
  consent: ConsentPage,
  masters: MastersPage,
  ba: BaPage,
  phd: PhdPage,
  PHDmasters: PHDmastersPage,
  council: councilPage,
  baPlus: baPlusPage,
  baProfessional: BaProfessionalPage,
  metacode: MetacodePage,
  bootcamp: BootcampPage,
  Certifications: CertificationsPage,
  CurrencyIncome: CurrencyIncomePage,
  CompleteAcademicDocuments: CompleteAcademicDocumentPage,
  FastTrackPlan: FastTrackPlanPage,
  CollaborationSpace: CollaborationSpacePage,
  ExecutionProcess: ExecutionProcessPage,
  languageLearning: languageLearningPage,
  IELTS: IELTSPage,
  DoctorateLanguage: DoctorateLanguagePage,
  OrganizationalLanguageBA: OrganizationalLanguageBAPage,
  OrganizationalLanguage: OrganizationalLanguagePage,
  fag: FagPage,
  club: ClubPage,
};
function App() {
  const isScrolled = useScrollBeyond(1);
  const isWide = useWidthExceeds(768);
  return (
    <Router>
      <Routes>
        {path.map((e) => {
          const Component = componentMapping[e.component];
          return (
            <Route
              key={e.id}
              path={e.path}
              element={
                <div className="flex flex-col relative h-screen">
                  <Header
                    links={e.linkList}
                    type="mobile"
                    isScrolled={isScrolled}
                  />
                  <Component isWide={isWide} isScrolled={isScrolled} />
                  <Footer />
                </div>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
