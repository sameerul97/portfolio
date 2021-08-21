import { ReactNode } from 'react'

interface Tag {
    link?: string;
    id: string;
    name: string;
}


interface ClickableBadgeprops {
    tag: Tag
}

interface BadgeProps {
    tag: Tag;
    classes?: string
}

interface ProjectCardProps {
    id: string
    image: string
    name: string
    projectTags: Array<Tag>
}

interface SectionProps {
    id: string;
    classes?: string
    children: ReactNode
}

interface TabsChildren {
    children: ReactNode
}

interface Tabprops {
    button: {
        filterName: string;
        name: string;
    }
    filterName: string;
    dispatch: ({ type }: {
        type: string
    }) => void;
    setFilterName: (text: string) => void;
}




export type {
    TabsChildren, Tabprops, SectionProps, ClickableBadgeprops,
    BadgeProps, Tag, ProjectCardProps
}
