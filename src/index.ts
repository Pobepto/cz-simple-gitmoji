import inquirerAutoCompletePrompt from "inquirer-autocomplete-prompt";
import inquirerMaxLengthInputPrompt from "inquirer-maxlength-input-prompt";

import { MAX_HEAD_LINE_WIDTH, MAX_SUBJECT_LINE_WIDTH } from "./consts";
import { filterMojis, getMojis } from "./utils";

const createQuestions = () => {
  const choices = getMojis();
  const questions = [
    {
      type: "autocomplete",
      name: "type",
      message: "Select the type of change you're committing:",
      source: (_, query) =>
        Promise.resolve(query ? filterMojis(choices, query) : choices),
    },
    {
      type: "maxlength-input",
      name: "subject",
      message: "Write a short description:",
      maxLength: MAX_SUBJECT_LINE_WIDTH,
    },
  ];

  return questions;
};

const prompter = (cz, commit) => {
  cz.prompt.registerPrompt("autocomplete", inquirerAutoCompletePrompt);
  cz.prompt.registerPrompt("maxlength-input", inquirerMaxLengthInputPrompt);

  cz.prompt(createQuestions()).then((answers) => {
    const emoji = answers.type.emoji;

    const head = `${emoji} ${answers.subject.trim()}`.slice(
      0,
      MAX_HEAD_LINE_WIDTH
    );

    commit(head);
  });
};

export default {
  prompter,
};
