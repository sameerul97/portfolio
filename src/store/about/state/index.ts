interface Tag {
  id: string;
  name: string;
}
interface TagList extends Array<Tag> { };

interface Info {
  id: string;
  name: string;
  tags?: TagList
  info?: string;
}

interface InfoList extends Array<Info> { };

interface About {
  id: string;
  filterName: string;
  name: string;
  info: InfoList;
}

interface AboutList extends Array<About> { };

interface AboutButtonFilters {
  id: string;
  filterName: string;
  name: string;
}

interface InitialStateType {
  aboutData: AboutList;
  selectedInfo: InfoList;
  aboutButtonFilters: Array<AboutButtonFilters>;
  error: null | string;
}

export type {
  AboutList,
  InitialStateType,
  Tag,
  Info,
  About,
  AboutButtonFilters
};
