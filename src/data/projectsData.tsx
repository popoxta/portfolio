import {Project} from "../types/project.tsx";

const projectsData: Project[] = [
    {
        name: 'BoxIt',
        description: 'BoxIt is an inventory management system that is aimed to create a simple yet intuitive approach' +
            'to storing arbitrary items in arbitrary containers with a creative flair. ' +
            'This full stack application is built using React Router, Express, Node, MongoDB and PassportJS.',
        image: '',
        links: {
            github: 'https://github.com/popoxta/boxit',
            figma: 'https://www.figma.com/file/LaPIpEsTw8hk4v4pegXzFm/Boxit?type=design&node-id=0%3A1&mode=design&t=aG2CPtBqhOFUqWj1-1',
            live: null,
        }
    },
    {
        name: 'Heike\'s Cafe',
        description: 'The landing page for Heike\'s Cafe is a client project designed and created from scratch to the' +
            'promote the owner\'s cafe in Coraki, Australia. The landing page was designed from the ground up to accurately' +
            'portray the business, and is created with React and Figma.',
        image: '',
        links: {
            github: null,
            figma: 'https://www.figma.com/file/qXEfAU9OOn5JYDSHwgQjEt/Untitled?type=design&node-id=0%3A1&mode=design&t=vOUBx5pzTm63LWF2-1',
            live: 'https://www.heikes.com.au/',
        }
    },
    {
        name: 'Pomo Buddy',
        description: 'Pomo Buddy is a friendly pomodoro timer to aid productivity and keep you focused on your studies. ' +
            'Pomo Buddy was created with Typescript and TailwindCSS. I took on a creative flair with this project and ' +
            'designed and drew the tomato friend in Procreate to accompany the project.',
        image: '',
        links: {
            github: 'https://github.com/popoxta/pomodoro',
            figma: 'https://www.figma.com/file/Tvyo2GxrKYva4ksCoGctbS/Untitled?type=design&node-id=1%3A2&mode=design&t=Q7KlXRIoCm4IGHwJ-1',
            live: 'https://main--deluxe-pastelito-3fa081.netlify.app/',
        }
    },
    {
        name: 'Evil Calculator',
        description: 'A fun and cheeky twist on a classic calculator, Evil Calculator allows for evil modifications to ' +
            'be made on top of a regular calculator application to befuddle friends and foes alike.' +
            'Evil calculator is a TypeScript and React project utilising tokenization to calculate and confuse.',
        image: '',
        links: {
            github: 'https://github.com/popoxta/evil-calculator',
            figma: 'https://www.figma.com/file/xU1a9rYhIuuQxJqgxv7GUS/Untitled?type=design&node-id=0%3A1&mode=design&t=59XbRIX2gdCFvFhn-1',
            live: 'https://inquisitive-sprite-15362c.netlify.app/',
        }
    },
]

export default projectsData