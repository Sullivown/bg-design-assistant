const { Configuration, OpenAIApi } = require('openai');
import { UserInputEnums } from '@/enums';
import { GenerateGameTypes } from '@/types';

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function generateGame({
	userInputType,
	userInput,
}: GenerateGameTypes) {
	// Generate overview
	const overview = await generateOverview({ userInputType, userInput });

	// Generate name

	// Generate rules

	// Generate box art prompt

	// Generate box art
}

export async function generateOverview({
	userInputType,
	userInput,
}: GenerateGameTypes) {
	let prompt;
	if (userInputType === UserInputEnums.THEMATIC) {
		prompt = `Generate an engaging, professional and marketable board game description including some board game mechanisms that align well with the overview of the theme, but not the name of the game, based on an overview of the theme: ${userInput}`;
	} else if (userInputType === UserInputEnums.MECHANISMS) {
		prompt = `Generate an engaging, professional and marketable board game description, but not the name of the game, based on an overview of information about the game and its board game mechanisms: ${userInput}`;
	} else {
		// No user input as user has requested a random idea
		prompt = `Generate an engaging, professional and marketable board game description including some board game mechanisms, but not the name of the game`;
	}

	let overview: string | null = null;
	try {
		const completion = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt,
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
	return overview;
}
