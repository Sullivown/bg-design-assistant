import Button from '@/elements/Button';
import Section from '@/elements/Section';

export default function Home() {
	return (
		<Section className='space-y-10'>
			<h2 className='text-center font-semibold text-2xl'>
				Welcome to Board Game Design Assistant!
			</h2>
			<p>Some intro text</p>
			<div>
				<h3>Select your method:</h3>
				<div className='flex flex-row flex-wrap sm:flex-nowrap justify-center gap-x-10 gap-y-5 my-5'>
					<Button className='w-full sm:w-1/3'>Random</Button>
					<Button className='w-full sm:w-1/3'>
						Thematic Description
					</Button>
					<Button className='w-full sm:w-1/3 '>Mechanisms</Button>
				</div>
			</div>
		</Section>
	);
}
