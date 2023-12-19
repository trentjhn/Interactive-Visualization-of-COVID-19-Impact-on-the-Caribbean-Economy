import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material"; //CssBaseline resets css to default and ThemeProvider provides ability to pass in themes to materialUI
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/Dashboard/dash";
import Dashboard2 from "./scenes/Dashboard/dash2";
import Sidebar from "./scenes/global/Sidebar";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();


  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}> 
      <CssBaseline/>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          {/* Routes to each page containing respective charts */}
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/dashboard2" element={<Dashboard2 />}/>
            <Route path="/bar" element={<Bar />}/>
            <Route path="/pie" element={<Pie />}/>
            <Route path="/line" element={<Line />}/>
            <Route path="/geography" element={<Geography />}/> 
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
