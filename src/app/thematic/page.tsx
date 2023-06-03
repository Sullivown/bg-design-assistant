import Section from '@/elements/Section';
import ThematicDescriptionForm from '@/components/ThematicDescriptionForm';

export default function ThematicPage() {
	return (
		<>
			<Section className='text-center text-2xl font-semibold mb-5'>
				<h2>Generate ideas from a thematic description</h2>
			</Section>
			<Section>
				<ThematicDescriptionForm />
			</Section>
		</>
	);
}
