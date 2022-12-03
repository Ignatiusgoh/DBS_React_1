import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<LoginPage />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
