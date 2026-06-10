import type { ExpectedOutputMap } from '../../../types.ts';

const expectedOutputMap: ExpectedOutputMap = {
	graphemes: {
		total: 75,
		by: {
			spaces: {
				total: 16,
			},
			letters: {
				total: 51,
			},
			digits: {
				total: 0,
			},
			punctuation: {
				total: 8,
			},
			symbols: {
				total: 0,
			},
		},
		related: {
			paragraphs: {
				total: 1,
			},
			lines: {
				total: 1,
			},
		},
	},
	words: {
		total: 17,
	},
	sentences: {
		total: 2,
	},
};

export default expectedOutputMap;
