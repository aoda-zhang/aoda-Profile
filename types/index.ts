import LanguageKeys from "@/constants/languageKeys";

export type MDRenderType = {
  datas: MDFileItemType[] | [];
};
export type MDFilesType = {
  [K in RoutePath]?: MDFileItemType[];
};
export type MDFileItemType = {
  title?: string;
  date?: string;
  summary?: string;
  content: string | undefined;
  tags?: string;
  [key: string]: string | number | Date | undefined;
};
export type MDFileOption = {
  path: string;
  name: string;
};
export enum RoutePath {
  home = "home",
  frontend = "frontend",
  backend = "backend",
  about = "about",
}

export type PostItemType = {
  coverPath?: string;
  title: string;
  desc: string;
  postPath: string;
  index?: number;
  tags: string[];
};

export type ItemType = {
  pageKey: string;
  postPath: string;
  fileFolder: string;
};

export type PostItemParam = {
  params: { slug: [LanguageKeys, string] };
};
