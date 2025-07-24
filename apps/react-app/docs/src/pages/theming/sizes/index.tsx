import Box from '@microui-kit/box'
import Button from '@sigmaui-kit/button'
import Input from '@sigmaui-kit/input'
import Text from '@sigmaui-kit/text'
import DocPage from '@docs/components/layout/DocPage'
import SizesMdx from '@docs/content/docs/theming/sizes.mdx'
import { theming } from '.velite'

const SizesPage = ({}) => {
  console.log('theming', theming)

  return (
    <DocPage

    >
      <SizesMdx/>
      <Box css={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button size="xs">xs</Button>
        <Button
          locking
          size="sm"
        >
          sm
        </Button>
        <Button
          loading
          disabled
          size="lg"
          _style={{
            wrapper: {
              // fontSize: 36
            },
          }}
        >
          lg
        </Button>
      </Box>
      <Box css={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Input
          size="xs"
          placeholder="xs"
        />
        <Input
          size="sm"
          placeholder="sm"
        />
        <Input
          disabled
          size="lg"
          placeholder="lg"
          _style={{
            wrapper: {
              // fontSize: 36
            },
          }}
        />
      </Box>
      <Box css={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Text size="xs">xs</Text>
        <Text size="sm">sm</Text>
        <Text
          size="lg"
        >
          lg
        </Text>
      </Box>
    </DocPage>
  )
}

export default SizesPage
