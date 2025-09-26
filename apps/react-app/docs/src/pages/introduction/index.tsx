import { usePlatform } from '@microui-kit/platform';
import Page from '@docs/components/layout/Page';
import IntroductionMdx from '@docs/content/docs/guides/introduction.mdx';

const Introduction = ({}) => {
  const { platform } = usePlatform();

  console.log('platform', platform);

  return (
    <Page>
      <IntroductionMdx />
    </Page>
  );
};

export default Introduction;
