import Box from '@microui-kit/box'
import Button from '@sigmaui-kit/button'
import DocPage from '@docs/components/layout/DocPage'
import VariantsMdx from '@docs/content/docs/theming/variants.mdx'

const VariantsPage = ({}) => {
  return (
    <DocPage>
      <VariantsMdx/>
      <Box css={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button variant="solid">solid</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="dashed">dashed</Button>
        <Button variant="text">text</Button>
        <Button variant="link">link</Button>
      </Box>
    </DocPage>
  )
}

export default VariantsPage
