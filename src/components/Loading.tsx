import Image from 'next/image';

export default function Loading() {
	return (
		<div className='flex flex-col justify-center items-center my-20 space-y-10'>
			<Image
				className=''
				src='/images/loading.svg'
				width='100'
				height='100'
				alt='Loading...'
			/>
			<p>
				Interesting..... I may need a little time to think, possibly
				30-40 seconds perhaps?
			</p>
		</div>
	);
}
