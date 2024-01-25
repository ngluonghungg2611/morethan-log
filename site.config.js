const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Ben",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "AI developer",
    bio: "I have ~ 2 years of experience in the field of computer vision. I want to become a bridge software engineer in the future. I am improving my professional knowledge and foreign language (Korean)",
    email: "benu.aidev@gmail.com",
    linkedin: "ben-aidev",
    github: "ngluonghungg2611",
    instagram: "",
  },
  projects: [
    {
      name: `isBenAIdev`,
      href: "https://github.com/ngluonghungg2611?tab=repositories",
    },
  ],
  // blog setting (required)
  blog: {
    title: "isBenAIdev",
    description: "Welcome to Ben blogs!",
  },

  // CONFIG configration (required)
  link: "https://bentech-blogs.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
