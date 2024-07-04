import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (() => <span>Software Engineer's Swiss Knife</span>) as React.FC,
  project: {
    link: 'https://github.com/shakhzodme/sesk',
  },
  docsRepositoryBase: "https://github.com/shakhzodme/sesk",
  footer: {
    text: "Software Engineer's Swiss Knife: A set of techniques for resolving known or unknown behaviors",
  },
  useNextSeoProps: () => ({
    titleTemplate: "%s - Software Engineer's Swiss Knife"
  })
}

export default config
