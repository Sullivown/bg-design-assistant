const { Configuration, OpenAIApi } = require('openai');
import { UserInputEnums } from '@/enums';
import { GenerateGameTypes, RequestCompletionTypes } from '@/types';

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

	// Generate title
	const title = await generateTitle(overview);

	// Generate rules
	const rules = await generateRules(title, overview);

	// Generate box art image prompt
	const imagePrompt = await generateImagePrompt(title, overview);

	// Generate box art
	const image = await generateImage(imagePrompt);

	return {
		title,
		overview,
		rules,
		image,
	};
}

async function generateOverview({
	userInputType,
	userInput,
}: GenerateGameTypes) {
	let overviewPrompt;
	if (userInputType === UserInputEnums.THEMATIC) {
		overviewPrompt = `Generate an engaging, professional and marketable board game description including some modern board game mechanisms that align well with the overview of the theme, but not the name of the game, based on an overview of the theme: ${userInput}`;
	} else if (userInputType === UserInputEnums.MECHANISMS) {
		overviewPrompt = `Generate an engaging, professional and marketable board game description, but not the name of the game, based on an overview of information about the game and its board game mechanisms: ${userInput}`;
	} else {
		// No user input as user has requested a random idea
		overviewPrompt = `Generate an engaging, professional and marketable board game description including some board game mechanisms, but not the name of the game`;
	}

	const overview = await requestCompletion({
		prompt: overviewPrompt,
		maxTokens: 700,
	});
	return overview;
}

async function generateTitle(overview: string) {
	const titlePrompt = `Generate a board game title for this overview: ${overview}`;
	const title = await requestCompletion({
		prompt: titlePrompt,
		maxTokens: 25,
	});
	return title;
}

async function generateRules(title: string, overview: string) {
	const rulesPrompt = `Generate a board game ruleset for a game called ${title} based on an overview: ${overview}`;
	const rules = await requestCompletion({
		prompt: rulesPrompt,
		maxTokens: 500,
	});
	return rules;
}

async function generateImagePrompt(title: string, overview: string) {
	const imagePromptPrompt = `Give a short description of an image which could be used as a box cover based on the title "${title}" and an overview: ${overview}. The description should be rich in visual detail`;
	const imagePrompt = await requestCompletion({
		prompt: imagePromptPrompt,
		maxTokens: 100,
	});
	return imagePrompt;
}

async function generateImage(imagePrompt: string) {
	const response = await openai.createImage({
		prompt: `${imagePrompt}. There should be no text in this image`,
		n: 1,
		size: '500x500',
		response_format: 'b64_json',
	});
	return response.data.data[0].b64_json;
}

async function requestCompletion({
	prompt,
	maxTokens,
}: RequestCompletionTypes) {
	let response;
	try {
		const completion = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt,
			max_tokens: maxTokens,
		});
		response = completion.data.choices[0].text.trim();
	} catch (error: any) {
		if (error.response) {
			console.log(error.response.status);
			console.log(error.response.data);
		} else {
			console.log(error.message);
		}
	}
	return response;
}
