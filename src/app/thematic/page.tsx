import Section from '@/elements/Section';
import GameDetails from '@/components/GameDetails';

export default function ThematicPage() {
	return (
		<>
			<Section className='text-center text-2xl font-semibold mb-5'>
				<h2>Generate ideas from a thematic description</h2>
			</Section>
			<GameDetails />
		</>
	);
}
