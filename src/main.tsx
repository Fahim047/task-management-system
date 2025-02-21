import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import LoginForm from './components/Forms/LoginForm.tsx';
import './index.css';
import MainLayout from './layouts/MainLayout.tsx';
import AuthProvider from './providers/AuthProvider.tsx';
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route path="" element={<App />} />
						<Route path="/login" element={<LoginForm />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	</StrictMode>
);
