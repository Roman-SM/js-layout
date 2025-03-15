import { createElement, createHeader, } from "../../script/layout";

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'header__title', "Ком'юніті")

page.append(title)

const NAV_BUTTON_LIST = [
  {
    info: 'База знань',
    viewed: true,
  },
  {
    info: 'Інформація',
    viewed: false,
  }
]

const createNav = () => {
  const navList = createElement('div', 'page__nav')

  NAV_BUTTON_LIST.forEach((navData) => {
    const nav = createElement(
      'button',
      navData.viewed
      ? 'page__nav--button-1'
      : 'page__nav--button-2',
      navData.info
    )

    navList.append(nav)
  })
  return navList
}

const nav = createNav()

page.append(nav)

const POST_INFO = [
  {
    src: '/svg/banner.svg',
    title: 'Що таке база знань?',
    description: 'База знань — база даних, що містить правила висновку та інформацію про людський досвід і знання в якійсь предметній області. У самообучающихся системах база знаний також містить інформацію, яка є результатом рішення попередніх завдань.',
    text_button: "Перейти до ком'юніті у Телеграм",
  }
]

const createPost = () => {
  const post = createElement('main', 'post')
  
  POST_INFO.forEach((postData) => {

    const img = createElement('img')

    img.src = postData.src

    const postInfo = createElement('div', 'post__text')

    const postTitle = createElement('h2', 'post__text--title', postData.title)

    const postDescription = createElement('p', 'post__text--description', postData.description)

    const postButton = createElement('button', 'post__button', postData.text_button)

    postInfo.append(postTitle, postDescription)

    post.append(img, postInfo, postButton)
  })
  return post
}

const postInfo = createPost()

page.append(postInfo)