import { usePlatform } from '@microui-kit/platform';
import Box from '@microui-kit/box';
import IntroductionMdx from '../../content/docs/guide/introduction.mdx';

const Introduction = ({}) => {
  const { platform } = usePlatform();

  console.log('platform', platform)

  return (
    <Box>
      <IntroductionMdx/>
    </Box>
  )
}

export default Introduction