const LocalConfig = {
  values: {
    TZ: process.env.TZ,
    NODE_ENV: process.env.NODE_ENV,
    AUTOPREFIXER_GRID: process.env.AUTOPREFIXER_GRID,
    NEXT_PUBLIC_GTAG_ID: process.env.NEXT_PUBLIC_GTAG_ID,
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    NEXT_PUBLIC_VERCEL_TOKEN: process.env.NEXT_PUBLIC_VERCEL_TOKEN,
    NEXT_PUBLIC_RESUME_LINK: process.env.NEXT_PUBLIC_RESUME_LINK || "https://drive.google.com/file/d/1V3gcPl_vbjeSHXq8GqJXJkwDCLjnWj1X/view?usp=drive_link",
  },
};

export default LocalConfig;
