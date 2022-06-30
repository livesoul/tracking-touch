import { setupIonicReact } from "@ionic/react";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <iframe
    title="touch"
    src="https://touch.xsense.co.th"
    frameBorder={0}
    width="100%"
    height="100%"
  />
);

export default App;
