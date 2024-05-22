import "./App.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useScrollBeyond from "./hooks/useScrollBeyond";
import useWidthExceeds from "./hooks/useWidthExceeds ";
import { path } from "./Event/fakeData";
import Loading from "./components/shared/Loading/loading";
// lazy Loading
const HomePage = lazy(() => import("./components/HomePage"));
const DesignPage = lazy(() => import("./components/DesignPage"));
const UniversityPage = lazy(() => import("./components/UniversityPage"));
const SeniorPage = lazy(() => import("./components/SeniorPage"));
const LoginPage = lazy(() => import("./components/LoginPage"));
const GloryPage = lazy(() => import("./components/GloryPage"));
const AdditionsPage = lazy(() => import("./components/AdditionsPage"));
const AchievementsPage = lazy(() => import("./components/AchievementsPage"));
const MastersGraduatesPage = lazy(() =>
  import("./components/MastersGraduatesPage")
);
const SupportPage = lazy(() => import("./components/SupportPage"));
const MastersPage = lazy(() => import("./components/MastersPage"));
const PHDmastersPage = lazy(() => import("./components/PHDmastersPage"));
const CouncilPage = lazy(() => import("./components/CouncilPage"));
const BaPlusPage = lazy(() => import("./components/BaPlusPage"));
const BaProfessionalPage = lazy(() =>
  import("./components/BaProfessionalPage")
);
const MetacodePage = lazy(() => import("./components/MetacodePage"));
const BootcampPage = lazy(() => import("./components/BootcampPage"));
const PermissionsPage = lazy(() => import("./components/PermissionsPage"));
const CertificationsPage = lazy(() =>
  import("./components/CertificationsPage")
);
const FastTrackPlanPage = lazy(() => import("./components/FastTrackPlanPage"));
const CollaborationSpacePage = lazy(() =>
  import("./components/CollaborationSpacePage")
);
const ExecutionProcessPage = lazy(() =>
  import("./components/ExecutionProcessPage")
);
const LanguageLearningPage = lazy(() =>
  import("./components/languageLearningPage")
);
const DoctorateLanguagePage = lazy(() =>
  import("./components/DoctorateLanguagePage")
);
const ClubPage = lazy(() => import("./components/ClubPage"));
const OrganizationalLanguageBAPage = lazy(() =>
  import("./components/OrganizationalLanguageBAPage")
);
const OrganizationalLanguagePage = lazy(() =>
  import("./components/OrganizationalLanguagePage")
);
const StudentsPage = lazy(() => import("./components/StudentsPage"));
const SatisfactionPage = lazy(() => import("./components/SatisfactionPage"));
const CooperationPage = lazy(() => import("./components/CooperationPage"));
const ChartPage = lazy(() => import("./components/ChartPage"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const IELTSPage = lazy(() => import("./components/IELTSPage"));
const ContactUsPage = lazy(() => import("./components/ContactUsPage"));
const ParticipationPage = lazy(() => import("./components/ParticipationPage"));
const PartnershipPage = lazy(() => import("./components/PartnershipPage"));
const InternationalPage = lazy(() => import("./components/InternationalPage"));
const WayOfSuccessPage = lazy(() => import("./components/WayOfSuccessPage"));
const ConsentPage = lazy(() => import("./components/ConsentPage"));
const CouncilBaPage = lazy(() => import("./components/CouncilBaPage"));
const CouncilMetacodePage = lazy(() =>
  import("./components/CouncilMetacodePage")
);
const CouncilFastTrackPlanPage = lazy(() =>
  import("./components/CouncilFastTrackPlanPage")
);
const FagPage = lazy(() => import("./components/FagPage"));
const CurrencyIncomePage = lazy(() =>
  import("./components/CurrencyIncomePage")
);
const CompleteAcademicDocumentPage = lazy(() =>
  import("./components/CompleteAcademicDocumentPage")
);
const BaPage = lazy(() => import("./components/BaPage"));
const PhdPage = lazy(() => import("./components/PHDPage"));
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
  council: CouncilPage,
  councilBa: CouncilBaPage,
  councilMetacode: CouncilMetacodePage,
  councilFastTrackPlan: CouncilFastTrackPlanPage,
  baPlus: BaPlusPage,
  baProfessional: BaProfessionalPage,
  metacode: MetacodePage,
  bootcamp: BootcampPage,
  Certifications: CertificationsPage,
  CurrencyIncome: CurrencyIncomePage,
  CompleteAcademicDocuments: CompleteAcademicDocumentPage,
  FastTrackPlan: FastTrackPlanPage,
  CollaborationSpace: CollaborationSpacePage,
  ExecutionProcess: ExecutionProcessPage,
  languageLearning: LanguageLearningPage,
  IELTS: IELTSPage,
  DoctorateLanguage: DoctorateLanguagePage,
  OrganizationalLanguageBA: OrganizationalLanguageBAPage,
  OrganizationalLanguage: OrganizationalLanguagePage,
  fag: FagPage,
  club: ClubPage,
  Students: StudentsPage,
  satisfaction: SatisfactionPage,
  about: AboutPage,
  permissions: PermissionsPage,
  Cooperation: CooperationPage,
  Chart: ChartPage,
  Contactus: ContactUsPage,
  Participation: ParticipationPage,
  Partnership: PartnershipPage,
  International: InternationalPage,
  wayOfSuccess: WayOfSuccessPage,
};
function App() {
  const isScrolled = useScrollBeyond(1);
  const isWide = useWidthExceeds(768);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="wrapper">
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            {path.map((e) => {
              const Component = componentMapping[e.component];
              return (
                <Route
                  key={e.id}
                  path={e.path}
                  element={
                    <>
                      {loading ? (
                        <Loading />
                      ) : (
                        <div
                          key={e.id}
                          className="relative flex flex-col h-screen"
                        >
                          <Header links={e.linkList} type="mobile" />
                          <Component isWide={isWide} isScrolled={isScrolled} />
                          <Footer />
                        </div>
                      )}
                    </>
                  }
                />
              );
            })}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
