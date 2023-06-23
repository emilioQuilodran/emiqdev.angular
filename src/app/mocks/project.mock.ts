import {IProject} from '../models/project.interface'
export const PROJECTS_LIST: IProject[] = [
  {
    id: 1,
    title: "PODCAST CHANNEL",
    techs: ["HTML", "CSS"],
    image: 'assets/images/podcast.jpg',
    desciption: "Responsive static web using HTML + CSS",
    urlDemo: "https://podcast-channel-acamica-equilodran.netlify.app/",
    urlCode: "https://github.com/emilioQuilodran/emilioQuilodran.github.io"
  },
  {
    id: 2,
    title: "TODO WEB APP",
    techs: ["ReactJs", "SCSS", "REDUX", "WEBPACK"],
    image: 'assets/images/todowebapp.png',
    desciption: "The classic todo app with a few twists! This app includes a dark/light theme toggle and Redux to handle the app state",
    urlDemo: "https://emiqdevtodoapp.netlify.app/",
    urlCode: "https://github.com/emilioQuilodran/TodoApp/tree/master"
  },
  {
    id: 3,
    title: "ECOMMERCE PRODUCT PAGE",
    techs: ["ReactJs", "REDUX", "MUI", "STYLED COMPONENT"],
    image: 'assets/images/ecommerce.jpg',
    desciption: "a beautiful product page made with React, Redux and an aproach using material ui and styled component",
    urlDemo: "https://emiqdev-sneakers.netlify.app/",
    urlCode: "https://github.com/emilioQuilodran/product-page"
  },
  {
    id: 4,
    title: "GIFFOS WEB APP",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    image: 'assets/images/gifos.jpg',
    desciption: "an interactive web application for sharing animated GIFs, putting into practice the fundamentals of programming and using JavaScript by getting API data from ,Giphy.com",
    urlDemo: "https://gifos-app-quilodran.netlify.app/index.html",
    urlCode: "https://github.com/emilioQuilodran/GifosAppQuilodran"
  },
  {
    id: 6,
    title: "SUITE LANDING PAGE",
    techs: ["NEXT.JS", "SASS"],
    image: 'assets/images/simpleLanding.jpg',
    desciption: "The choice of Next.js and SASS are a great combination when it comes to implementation in our application. Next.js, through its focus on server-side rendering, enables faster loading speeds, improving performance and accessibility. On the other hand, SASS provides a variety of tools and features for easy CSS customization and maintenance",
    urlDemo: "https://emiqdev-suite-landing-page.netlify.app/",
    urlCode: "https://github.com/emilioQuilodran/suiteLanding"
  }
]
