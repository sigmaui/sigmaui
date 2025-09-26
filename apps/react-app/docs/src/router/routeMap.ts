const componentPath = '/docs/components';
const themingPath = '/docs/theming';

export const routeMap = {
  playgroundPath: '/playground',
  blogPath: '/blogs',
  introductionPath: '/docs/introduction',
  installationPath: '/docs/installation',
  blockPath: '/docs/blocks',
  chartPath: '/docs/charts',
  templatePath: '/docs/templates',
  componentPath,
  component: {
    overview: `${componentPath}/overview`,
    box: `${componentPath}/box`,
    button: `${componentPath}/button`,
    input: `${componentPath}/input`,
    text: `${componentPath}/text`,
    select: `${componentPath}/select`,
    slider: `${componentPath}/slider`,
    form: `${componentPath}/form`,
    tooltip: `${componentPath}/tooltip`,
    switch: `${componentPath}/switch`,
    loading: `${componentPath}/loading`,
  },
  themingPath,
  theming: {
    sizes: `${themingPath}/sizes`,
    variants: `${themingPath}/variants`,
  },
};
