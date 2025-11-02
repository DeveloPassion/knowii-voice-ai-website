import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './styles/index.css'

import AppLayout from './components/layout/app-layout'
import HomePage from './pages/home'
import PrivacyPolicyPage from './pages/privacy-policy'
import TermsOfUsePage from './pages/terms-of-use'

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('Root element not found')
}

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/privacy-policy"
						element={<PrivacyPolicyPage />}
					/>
					<Route path="/terms-of-use" element={<TermsOfUsePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
