import {IProject} from '../models/project.interface'
export const PROJECTS_LIST: IProject[] = [
  {
    id: 1,
    title: "PODCAST CHANNEL",
    techs: ["HTML", "CSS"],
    image: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/608ff0add4fcff00071f5447/screenshot_2021-05-03-12-46-42-0000.png',
    desciption: "Responsive static web using HTML + CSS",
    urlDemo: "https://podcast-channel-acamica-equilodran.netlify.app/",
    urlCode: "https://github.com/emilioQuilodran/emilioQuilodran.github.io"
  },
  {
    id: 2,
    title: "TODO WEB APP",
    techs: ["ReactJs", "SCSS", "REDUX", "WEBPACK"],
    image: 'https://screenshot-proxy.netlify.app/f_webp,w_336/https://d33wubrfki0l68.cloudfront.net/6462e6579cf5160008c05dad/screenshot_2023-05-16-02-12-27-0000.png',
    desciption: "The classic todo app with a few twists! This app includes a dark/light theme toggle and Redux to handle the app state",
    urlDemo: "https://emiqdevtodoapp.netlify.app/",
    urlCode: "https://github.com/emilioQuilodran/TodoApp/tree/master"
  },
  /*
  {
    id: 3,
    title: "ECOMMERCE PRODUCT PAGE",
    techs: ["ReactJs", "REDUX", "MUI", "STYLED COMPONENT"],
    image: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64705aa45986870008619baa/screenshot_2023-05-26-07-07-48-0000.png',
    desciption: "a beautiful product page made with React, Redux and an aproach using material ui and styled component",
    urlDemo: "https://emiqdev-sneakers.netlify.app/",
    urlCode: "https://github.com/emilioQuilodran/product-page"
  },*/
  {
    id: 4,
    title: "GIFFOS WEB APP",
    techs: ["HTML", "CSS", "JAVASCRIPT"],
    image: 'https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/619d6f697ba987000759f462/screenshot_2021-11-23-22-47-10-0000.png',
    desciption: "an interactive web application for sharing animated GIFs, putting into practice the fundamentals of programming and using JavaScript by getting API data from ,Giphy.com",
    urlDemo: "https://gifos-app-quilodran.netlify.app/index.html",
    urlCode: "https://github.com/emilioQuilodran/GifosAppQuilodran"
  },
  {
    id: 5,
    title: "PORTFOLIO WEB",
    techs: ["ANGULAR", "SCSS", "JAVASCRIPT"],
    image: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/645cf8a529e64c0008dc737b/screenshot_2023-05-11-14-16-46-0000.png',
    desciption: "a single page portfolio, oriented to mobile first, using angular/scss",
    urlDemo: "https://emiqdev.netlify.app/",
    urlCode: "https://github.com/emilioQuilodran/emiqdev.angular"
  }
]
