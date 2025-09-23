import {Project} from '@/types';

export const projects: Project[] = [
    {
        id: '1',
        title: "Rastuc Mobile Application Prototype with Flutter",
        description: "A mobile app prototype of the rastuc.com website, built using flutter, to manage bookings, carediscovery, authentication, and payments.",
        image: '/images/projects/rastuc.png',
        tags: ['flutter', 'dart', 'fastlane', 'restful/graphql'],
     
        githubUrl: 'https://github.com/KenChiri/ecommerce-platform',
        liveUrl: 'https://ecommerce-demo.vercel.app',
        author: {
        name: 'Kenneth Kipchirchir',
        avatar: '/images/IMG_0333.jpg',
        username: 'KenChiri'
        }
    },
    {
        id: '2',
        title: 'Bestworlds IT Solutions',
        description: 'A modern rebrand of Bestworlds static website, it a live dynamic website that offers an modern E-commerce overview of the products and services offered and some functionality that allows them to make, manage, track and pay for their orders.',
        image: '/images/projects/bestworlds.jpg',
        tags: ['react', 'socketio', 'webrtc', 'nodejs'], 
        githubUrl: 'https://github.com/KenChiri/BIS_BACKEND',
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
        image: '/images/projects/bestworlds.jpg',
        tags: ['react', 'socketio', 'webrtc', 'nodejs'], 
        githubUrl: 'https://github.com/KenChiri/kabu_clubs',
        liveUrl: 'none',
        author: {
        name: 'Kenneth Kipchirchir',
        avatar: '/images/IMG_0333.jpg',
        username: 'KenChiri'
        }
    },

]