import { usePlatform } from '@microui-kit/platform';
import Box from '@microui-kit/box';
import Button from 'packages/react/src/components/button/src';
import Page from '../../components/Page';

import { routeMap } from '../../router/routeMap';

const Home = ({}) => {
  const { platform } = usePlatform();

  console.log('platform', platform)

  return (
    <Page>
      <Box
        css={{
          width: '40%'
        }}
      >
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}
        >
          <Box
            as="h1"
          >
            Build your own Design System
          </Box>
          <Box
            as="p"
          >
            Beautifully designed components built with Ark UI and FelaJS that work with a variety of JS frameworks.
          </Box>
        </Box>
        <Box
          css={{
            marginTop: 24
          }}
        >
          <Button
            href={routeMap.introductionPath}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Page>
  )
}

export default Home