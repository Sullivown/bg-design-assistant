const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
	const req = await request.json();

	console.log(req.userInput);
	let overview: string | null = null;
	try {
		const completion = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt: `Generate an engaging, professional and marketable board game description based on an overview: ${req.userInput}`,
			max_tokens: 700,
		});
		overview = completion.data.choices[0].text.trim();
	} catch (error: any) {
		if (error.response) {
			console.log(error.response.status);
			console.log(error.response.data);
		} else {
			console.log(error.message);
		}
	}

	return new Response(JSON.stringify({ overview }), {
		status: 200,
	});
}
