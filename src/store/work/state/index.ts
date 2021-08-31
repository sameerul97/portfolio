interface Tag {
  id: string;
  name: string;
}
interface TagList extends Array<Tag> { };


interface Work {
  id: string;
  filterName: string;
  name: string;
  image: string;
  projectTags: TagList;
}

interface WorkList extends Array<Work> { };

interface WorkButtonFilters {
  id: string;
  filterName: string;
  name: string;
}

interface InitialStateType {
  workData: WorkList;
  selectedInfo: WorkList;
  workFilterButtons: Array<WorkButtonFilters>;
  error: null | string;
}

export type {
  WorkList,
  InitialStateType,
  Tag,
  Work,
  WorkButtonFilters
};
