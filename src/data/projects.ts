import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: '1',
        title: 'Bestworlds IT Solutions',
        description: 'A modern rebrand of Bestworlds static website, it a live dynamic website that offers an modern E-commerce overview of the products and services offered and some functionality that allows them to make, manage, track and pay for their orders.',
        longDescription: "We build a full E-Commerce platform that does a lot than just display services: From 0auth, to tracking an order to completion.", // New: Detailed "Problem Solved" text
        date: "3rd Dec 2025",         // New: When it was started/finished
        contributors: {    // New: List of people who worked on it
            name: "Kenneth Kipchirchir",
            avatar: "/images/IMG_0333.jpg",
            role: "Backend Wed Developer"
        },
        image: '/images/projects/bestworlds.png',
        tags: ['react', 'redis', 'RabbitMQ', 'PostgreSQL', 'Django', 'Docker', 'Graphql', 'DRF', 'Nextjs'],
        githubUrl: 'https://github.com/KenChiri/BIS_BACKEND',
        liveUrl: 'https://www.bestworldsbis.com/',
        author: {
            name: 'Kenneth Kipchirchir',
            avatar: '/images/IMG_0333.jpg',
            username: 'KenChiri'
        }
    },
    {
        id: '2',
        title: "Rastuc Mobile Application Prototype with Flutter",
        description: "A mobile app prototype of the rastuc.com website, built using flutter, to manage bookings, carediscovery, authentication, and payments.",
        longDescription: "This is a mobile app prototype for the Rastuc patient app V1 that was begun to streamline the patient booking process. This aimed to bring the services into the pockets of the patients...", // New: Detailed "Problem Solved" text
        date: "3rd Mar 2024",         // New: When it was started/finished
        contributors: {    // New: List of people who worked on it
            name: "Kenneth Kipchirchir",
            avatar: "/images/IMG_0333.jpg",
            role: "Lead Developer"
        },
        image: '/images/projects/rastuc.png',
        tags: ['Flutter', 'Dart', 'Fastlane', 'Graphql', 'Restful API'],

        githubUrl: 'none',
        liveUrl: 'none',
        author: {
            name: 'Kenneth Kipchirchir',
            avatar: '/images/IMG_0333.jpg',
            username: 'KenChiri'
        }
    },
    {
        id: '3',
        title: 'Kabu Clubs',
        description: 'An app for students to create groups and communities for school and it allows event management, and project tracking for class work.',
        longDescription: "This was initially meant to be a social platform for students but I added more depth to it and add a bit of collaborative communities to streamline communications.", // New: Detailed "Problem Solved" text
        date: "3rd Dec 2025",         // New: When it was started/finished
        contributors: {    // New: List of people who worked on it
            name: "Kenneth Kipchirchir",
            avatar: "/images/IMG_0333.jpg",
            role: "Mobile App Developer"
        },
        image: '/images/projects/kabu.png',
        tags: ['Flutter', 'Firebase', 'Dart'],
        githubUrl: 'https://github.com/KenChiri/kabu_clubs',
        liveUrl: 'none',
        author: {
            name: 'Kenneth Kipchirchir',
            avatar: '/images/IMG_0333.jpg',
            username: 'KenChiri'
        }
    },
    {
        id: '4',
        title: 'Accureport',
        description: 'AccuReport aims to improve public safety through efficient and automated reporting processes using modern technologies.',
        longDescription: "AccuReport utilizes a 3-Tier architecture based on Python's Django framework, providing user-friendly interfaces for citizens and law enforcement officers. The platform includes features such as anonymous reporting, incentivization, and real-time updates to enhance citizen engagement, while also enabling automated data collection and streamlined investigations to empower law enforcement. ", // New: Detailed "Problem Solved" text
        date: "11 April 2024",         // New: When it was started/finished
        contributors: {    // New: List of people who worked on it
            name: "Kenneth Kipchirchir",
            avatar: "/images/IMG_0333.jpg",
            role: "Student Developer"
        },
        image: '/images/projects/accureport.png',
        tags: ['Django', 'SQLite', 'Html', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/KenChiri/DJANGO',
        liveUrl: 'none',
        author: {
            name: 'Kenneth Kipchirchir',
            avatar: '/images/IMG_0333.jpg',
            username: 'KenChiri'
        }
    },
    {
        id: '5',
        title: 'Insta Foods',
        description: 'A multiplatform food deliver system with two frameworks React and Flutter, for restaurants and the food ordering application.',
        longDescription: "Insta Foods is a comprehensive food delivery solution that connects restaurants, customers, and delivery personnel through a seamless, user-friendly interface. Built with Dart and Flutter for the mobile application, and React.js for the web interface, FoodSwift offers a robust platform for efficient food ordering and delivery management.", // New: Detailed "Problem Solved" text
        date: "31 July 2024",         // New: When it was started/finished
        contributors: {    // New: List of people who worked on it
            name: "Kenneth Kipchirchir",
            avatar: "/images/IMG_0333.jpg",
            role: "Student Developer"
        },
        image: '/images/projects/bestworlds.jpg',
        tags: ['React', 'Firebase', 'Flutter', 'Dart'],
        githubUrl: 'https://github.com/KenChiri/Kaba-Food-Delivery-App',
        liveUrl: 'none',
        author: {
            name: 'Kenneth Kipchirchir',
            avatar: '/images/IMG_0333.jpg',
            username: 'KenChiri'
        }
    },

]