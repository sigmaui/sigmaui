import { usePlatform } from '@microui-kit/platform';
import Page from '@docs/components/Page';
import IntroductionMdx from '@docs/content/docs/guide/introduction.mdx';

const Introduction = ({}) => {
  const { platform } = usePlatform();

  console.log('platform', platform)

  return (
    <Page>
      <IntroductionMdx/>
    </Page>
  )
}

export default Introduction