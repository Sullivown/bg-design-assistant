import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='flex flex-row content-center flex-wrap justify-center bg-dark py-6'>
			<Link
				href='/'
				className='flex flex-row content-center text-center flex-wrap justify-center text-white text-3xl space-x-2'
			>
				<WrenchScrewdriverIcon className='text-white h-8 w-8' />
				<h1>Boardgame Design Assistant</h1>
			</Link>
		</header>
	);
}
