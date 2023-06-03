import Section from '@/elements/Section';
import Image from 'next/image';

export default function RandomPage() {
	return (
		<>
			<Section className='text-center text-2xl font-semibold mb-5'>
				<h2>Random Ideas</h2>
			</Section>
			<Section className='flex flex-col items-center space-y-10 mb-5'>
				<h3 className='text-center text-xl'>Suggestion 1</h3>
				<Image
					className='border'
					src='/images/main-background.jpg'
					width='500'
					height='500'
					alt='Suggestion 1 box art'
				/>
				<div>
					<h4 className='text-center text-lg mb-3'>Overview</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eius placeat impedit, dolores minus velit at dicta
						veniam excepturi facere totam rerum quam officia culpa
						vero obcaecati nobis deleniti ex dolor Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Beatae,
						laboriosam eum itaque dignissimos voluptatum, explicabo,
						deserunt commodi pariatur accusamus facilis maxime
						repellendus? Eos perspiciatis perferendis nostrum
						consectetur iusto molestiae cupiditate necessitatibus
						nisi temporibus vero atque libero mollitia suscipit
						reiciendis placeat dolores a non soluta, laudantium
						nihil? Facere officia necessitatibus delectus? Lorem
						ipsum dolor sit amet consectetur, adipisicing elit.
						Voluptatem blanditiis atque totam sit commodi? Modi
						ipsam est magnam ducimus rerum possimus et obcaecati?
						Earum voluptatem accusantium, totam corporis, temporibus
						quod laboriosam quibusdam nemo esse tenetur accusamus
						inventore praesentium deserunt recusandae. Nulla soluta
						laboriosam sunt delectus, reiciendis non maxime quaerat
						adipisci, voluptatibus quos impedit fugiat ipsum
						perspiciatis laudantium, tempora itaque sit. Tenetur
						earum harum delectus eligendi sequi perferendis nostrum
						expedita quaerat voluptatem temporibus autem quos ab
						corporis dignissimos sunt necessitatibus obcaecati quam
						tempora ut alias animi, laudantium, possimus iste! Amet
						suscipit placeat totam velit iusto magni veritatis et
						harum non similique.nihil? Facere officia necessitatibus
						delectus? Lorem ipsum dolor sit amet consectetur,
						adipisicing elit. Voluptatem blanditiis atque totam sit
						commodi? Modi ipsam est magnam ducimus rerum possimus et
						obcaecati? Earum voluptatem accusantium, totam corporis,
						temporibus quod laboriosam quibusdam nemo esse tenetur
						accusamus inventore praesentium deserunt recusandae.
						Nulla soluta laboriosam sunt delectus, reiciendis non
						maxime quaerat adipisci, voluptatibus quos impedit
						fugiat ipsum perspiciatis laudantium, tempora itaque
						sit. Tenetur earum harum delectus eligendi sequi
						perferendis nostrum expedita quaerat voluptatem
						temporibus autem quos ab corporis dignissimos sunt
						necessitatibus obcaecati quam tempora ut alias animi,
						laudantium, possimus iste! Amet suscipit placeat totam
						velit iusto magni veritatis et harum non
						similique.nihil? Facere officia necessitatibus delectus?
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Voluptatem blanditiis atque totam sit commodi?
					</p>
				</div>
			</Section>
		</>
	);
}
