import Button from '@/elements/Button';
import Section from '@/elements/Section';
import Link from 'next/link';

export default function HomePage() {
	return (
		<Section className='space-y-10'>
			<h2 className='text-center font-semibold text-2xl'>
				Welcome to Board Game Design Assistant!
			</h2>
			<div className='text-center'>
				<p>Hello!</p>
				<p>
					Welcome to the Board Game Design Assistant! an OpenAI
					powered tool for assisting with the board game design
					process.
				</p>
			</div>

			<div>
				<h3>Select your method:</h3>
				<div className='flex flex-row flex-wrap sm:flex-nowrap justify-center gap-x-10 gap-y-5 my-5'>
					<Link href='/random' className='w-full sm:w-1/3'>
						<Button className='w-full'>Random</Button>
					</Link>
					<Link href='/thematic' className='w-full sm:w-1/3'>
						<Button className='w-full'>Thematic Description</Button>
					</Link>
					<Link href='/mechanisms' className='w-full sm:w-1/3'>
						<Button className='w-full'>Mechanisms</Button>
					</Link>
				</div>
			</div>
		</Section>
	);
}
