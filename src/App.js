import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<h1>route path</h1>} />
				<Route exact path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
