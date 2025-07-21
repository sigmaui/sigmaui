import { usePlatform } from '@microui-kit/platform';
import Page from '../../components/Page';
import IntroductionMdx from '../../content/docs/guide/introduction.mdx';

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