import Image from 'next/image';
import { GameDetailsProps } from '@/types';

export default function GameDetails({ game }: GameDetailsProps) {
	return (
		<section className='flex flex-col justify-center items-center content-center bg-white w-full max-w-7xl p-4 sm:p-6 lg:p-8 rounded-lg min-h-full space-y-10 mb-5'>
			<h3 className='text-center text-2xl'>{game.title}</h3>
			<Image
				className='rounded-md'
				src={`data:image/png;base64, ${game.image}`}
				width='500'
				height='500'
				alt={`${game.title} box art`}
			/>
			<div>
				<h4 className='text-center text-xl mb-3'>Overview</h4>
				<p>{game.overview}</p>
			</div>
			<div>
				<h4 className='text-center text-xl mb-3'>Rules</h4>
				<p>{game.rules}</p>
			</div>
		</section>
	);
}
