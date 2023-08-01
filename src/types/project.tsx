export interface Project {
    name: string,
    description: string,
    image: string,
    links: {
        github: (string | null),
        figma: (string | null),
        live: (string | null)
    }
}