import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
			<body className={`flex flex-col min-h-screen ${poppins.className}`}>
				<Header />
				<main className='flex flex-col flex-1 items-center bg-main-background bg-cover bg-center bg-blend-overlay bg-dark/70 p-4 sm:p-6 lg:p-8'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
