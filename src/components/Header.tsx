import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';

export default function Header() {
	return (
		<header className='flex flex-row content-center text-center flex-wrap justify-center bg-dark text-white py-6 text-3xl space-x-2'>
			<WrenchScrewdriverIcon className='text-white h-8 w-8' />
			<h1>Boardgame Design Assistant</h1>
		</header>
	);
}
