import pad from "pad";
import { GIT_MOJIS } from "./consts";

export const filterMojis = (
  arr: { name: string; code: string }[],
  query: string
) => {
  return arr.filter(({ name, code }) => {
    return (
      name.toLocaleLowerCase().includes(query) ||
      code.toLocaleLowerCase().includes(query)
    );
  });
};

export const getMojis = () => {
  const maxNameLength = GIT_MOJIS.reduce(
    (maxLength, type) =>
      type.name.length > maxLength ? type.name.length : maxLength,
    0
  );

  return GIT_MOJIS.map((choice) => ({
    name: `${pad(choice.code, maxNameLength)}  ${choice.emoji}  ${
      choice.description
    }`,
    value: {
      emoji: choice.emoji,
      name: choice.name,
    },
    code: choice.code,
  }));
};
