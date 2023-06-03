import Section from '@/elements/Section';
import GameDetails from '@/components/GameDetails';

export default function RandomPage() {
	return (
		<>
			<Section className='text-center text-2xl font-semibold mb-5'>
				<h2>Random Ideas</h2>
			</Section>
			<GameDetails />
		</>
	);
}
