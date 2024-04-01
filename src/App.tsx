import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./_root/pages/RootLayout";
import Home from "./_root/pages/Home";
import Wassersport from "./_root/pages/Wassersport";
import Umgebung from "./_root/pages/Umgebung";
import Buchung from "./_root/pages/Buchung";
import Verein from "./_root/pages/Verein";
import Partner from "./_root/pages/Partner";
import NotFound from "./_root/pages/NotFound";
import UberUns from "./_root/pages/haus/UberUns";
import Ausstattung from "./_root/pages/haus/Ausstattung";
import Tagungen from "./_root/pages/haus/Tagungen";
import Anfahrt from "./_root/pages/haus/Anfahrt";
import Kontakt from "./_root/pages/haus/Kontakt";
import Webcam from "./_root/pages/haus/Webcam";
import Stellenangebote from "./_root/pages/haus/Stellenangebote";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        {/* "haus" menu routes */}
        <Route path="haus/uberuns" element={<UberUns />} />
        <Route path="haus/ausstattung" element={<Ausstattung />} />
        <Route path="haus/tagungen" element={<Tagungen />} />
        <Route path="haus/anfahrt" element={<Anfahrt />} />
        <Route path="haus/kontakt" element={<Kontakt />} />
        <Route path="haus/webcam" element={<Webcam />} />
        <Route path="haus/stellenangebote" element={<Stellenangebote />} />

        <Route path="wassersport" element={<Wassersport />} />
        <Route path="umgebung" element={<Umgebung />} />
        <Route path="buchung" element={<Buchung />} />
        <Route path="verein" element={<Verein />} />
        <Route path="partner" element={<Partner />} />
      </Route>

      {/* this is the catch all 404 page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
