import React from 'react';

export default function ThematicDescriptionForm() {
	return (
		<form>
			<div className='space-y-12'>
				<h2 className='text-base font-semibold leading-7 text-gray-900'>
					Instructions
				</h2>
				<p className='mt-1 text-sm leading-6 text-gray-600'>
					Please note that this information will be shared with
					OpenAI, so please do not include any personal or sensitive
					information.
				</p>
				<div className='col-span-full'>
					<label
						htmlFor='theme-description'
						className='block text-sm font-medium leading-6 text-gray-900'
					>
						Theme
					</label>
					<div className='mt-2'>
						<textarea
							id='theme-description'
							name='theme-description'
							rows={3}
							className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							defaultValue={''}
						/>
					</div>
				</div>
			</div>
		</form>
	);
}
