import Box from '@microui-kit/box';
import Select from 'packages/react/src/components/select/src';
import Button from 'packages/react/src/components/button/src';

const Home = ({}) => {
  return (
    <div>
      <Box
        css={{
          fontSize: '2rem'
        }}
        _class={['absolute', 'fixed', 'static']}
      >
        Box
      </Box>
      <Select
        options={{
          items: [
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' }
          ]
        }}
        placeholder="Select a Framework"
        _style={{
          wrapper: {},
          trigger: {}
        }}
      >
        Select
      </Select>
      <Button>
        Button
      </Button>
    </div>
  )
}

export default Home