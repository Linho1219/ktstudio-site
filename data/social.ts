export type Social = {
  github?: string
  x?: string
  juejin?: string
  qq?: string
  wx?: string
  cloudmusic?: string
  zhihu?: string
  email?: string
  discord?: string
  bilibili?: string
}

type SocialValue = {
  href?: string
  title: string
  icon: string
  color: string
}

const social: Social = {
  github: 'https://github.com/katgreene',
  // x: 'https://twitter.com/kuizuo',
  // juejin: 'https://juejin.cn/user/1565318510545901',
  // wx: 'https://img.kuizuo.cn/wechat.png',
  // // qq: 'https://img.kuizuo.cn/qq.png',
  // // zhihu: 'https://www.zhihu.com/people/kuizuo',
  cloudmusic: 'https://music.163.com/#/user/home?id=1547617963',
  // email: 'cgz_catgreen1234@outlook.com',
  bilibili: 'https://space.bilibili.com/1519308330',
}

const socialSet: Record<keyof Social, SocialValue> = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  juejin: {
    href: social.juejin,
    title: '掘金',
    icon: 'simple-icons:juejin',
    color: '#1E81FF',
  },
  x: {
    href: social.x,
    title: 'X',
    icon: 'ri:twitter-x-line',
    color: '#000',
  },
  wx: {
    href: social.wx,
    title: '微信',
    icon: 'ri:wechat-2-line',
    color: '#6efddc',
  },
  zhihu: {
    href: social.zhihu,
    title: '知乎',
    icon: 'ri:zhihu-line',
    color: '#1772F6',
  },
  discord: {
    href: social.discord,
    title: 'Discord',
    icon: 'ri:discord-line',
    color: '#5A65F6',
  },
  bilibili: {
    href: social.bilibili,
    title: 'Bilibili',
    icon: 'ri:bilibili-line',
    color: '#1296db',
  },
  qq: {
    href: social.qq,
    title: 'QQ',
    icon: 'ri:qq-line',
    color: '#1296db',
  },
  email: {
    href: social.email,
    title: '邮箱',
    icon: 'ri:mail-line',
    color: '#D44638',
  },
  cloudmusic: {
    href: social.cloudmusic,
    title: '网易云',
    icon: 'ri:netease-cloud-music-line',
    color: '#C20C0C',
  },
}

export default socialSet
