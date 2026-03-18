import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app/routes/AppRoutes";
import { Header } from "./app/shared/components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
