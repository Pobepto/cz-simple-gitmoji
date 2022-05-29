import pad from "pad";
import { GitMojiChoice, GIT_MOJIS } from "./consts";

export const filterMojis = (
  arr: GitMojiChoice[],
  query: string
): GitMojiChoice[] => {
  return arr.filter(({ name, code }) => {
    return (
      name.toLocaleLowerCase().includes(query) ||
      code.toLocaleLowerCase().includes(query)
    );
  });
};

export const getMojisChoices = (): GitMojiChoice[] => {
  return GIT_MOJIS.map((choice) => ({
    name: `${choice.emoji}\t${choice.description}`,
    value: { emoji: choice.emoji, code: choice.code },
    code: choice.code,
  }));
};
