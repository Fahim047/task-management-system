import GoogleIcon from '@/assets/google.svg';
import { useAuth } from '@/hooks';
import { Navigate, useNavigate } from 'react-router';
import { Button } from '../ui';
const LoginForm = () => {
	const { user, handleSignInWithGoogle } = useAuth();
	const navigate = useNavigate();

	const handleLogin = async (): Promise<void> => {
		try {
			if (handleSignInWithGoogle) {
				await handleSignInWithGoogle();
				console.log('Successfully logged in');
				navigate('/');
			} else {
				throw new Error('handleSignInWithGoogle is not defined');
			}
		} catch (error) {
			console.error(error);
		}
	};

	if (user) {
		return <Navigate to="/" />;
	}
	return (
		<div className="flex justify-center items-center min-h-screen bg-white/80">
			<div className="bg-white shadow-lg rounded-lg p-8 w-96 text-center">
				<h2 className="text-2xl font-bold mb-6">Login</h2>
				<Button
					onClick={handleLogin}
					className="w-full py-6 cursor-pointer transition-colors duration-300 mb-4"
				>
					<img src={GoogleIcon} alt="google" className="size-6" />
					Sign in with Google
				</Button>
				<p className="text-gray-500">You have to login to enter</p>
				{/* <Button asChild variant="link">
					<Link to="/">Back to home</Link>
				</Button> */}
			</div>
		</div>
	);
};

export default LoginForm;
