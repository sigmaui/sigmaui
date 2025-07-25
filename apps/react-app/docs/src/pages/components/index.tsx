import { useOutletContext } from 'react-router-dom';
import { useRouter } from '@microui-kit/use-router'
import DocPage from '@docs/components/layout/DocPage'
import MDXContent from '@docs/components/common/MDXContent'
import { allComponents } from '.contentlayer/generated'

const ComponentPage = ({}) => {
  const { pageName }: { pageName: string } = useOutletContext();

  const router = useRouter();
  const { params } = router;

  const page = allComponents.find(item => item.name === params.slug) || {};

  console.log('page', page)

  return (
    <DocPage
      data={page}
    >
      <MDXContent
        code={page.body?.code}
        // code={page.code}
      />
    </DocPage>
  )
}

export default ComponentPage
