import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import LoginForm from './components/Forms/LoginForm.tsx';
import './index.css';
import MainLayout from './layouts/MainLayout.tsx';
import AuthProvider from './providers/AuthProvider.tsx';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
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
		</QueryClientProvider>
	</StrictMode>
);
