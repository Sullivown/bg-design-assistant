import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata = {
	title: 'BG Design Assistant',
	description: 'AI generated board game design suggestions',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`flex flex-col h-screen ${poppins.className}`}>
				<header className='flex flex-row content-center justify-center bg-dark text-white py-6'>
					This is the header
				</header>
				<main className='flex flex-col items-center h-full bg-main-background bg-fit bg-center bg-blend-overlay bg-dark/70 p-4 sm:p-6 lg:p-8'>
					{children}
				</main>
				<footer className='flex flex-row content-center justify-center bg-dark text-white py-6'>
					This is the footer
				</footer>
			</body>
		</html>
	);
}
