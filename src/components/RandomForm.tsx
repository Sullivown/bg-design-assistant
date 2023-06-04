import { FormProps } from '@/types';

export default function RandomForm({ handleSubmit }: FormProps) {
	return (
		<form action={handleSubmit}>
			<div className='space-y-8'>
				<h2 className='text-2xl text-center font-semibold leading-7 text-gray-900'>
					Instructions
				</h2>
				<p className='mt-1 leading-6 text-center'>
					Click on the button below and I will generate a random board
					game design idea for you.
				</p>
				<p className='mt-1 text-sm font-semibold leading-6 text-center'>
					Please be patient as I have a lot to think about! Requests
					can take around 30 - 40 seconds!
				</p>
				<p className='mt-1 text-sm leading-6 text-center'>
					Please note that this information will be shared with
					OpenAI, so please do not include any personal or sensitive
					information.
				</p>

				<div className='flex flex-row justify-center'>
					<button className='px-4 py-5 rounded-lg bg-pink hover:bg-pink-dark text-white text-xl'>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
}
