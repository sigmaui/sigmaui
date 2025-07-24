import { useOutletContext } from 'react-router-dom';
import { useRouter } from '@microui-kit/use-router'
import DocPage from '@docs/components/layout/DocPage'
import MDXContent from '@docs/components/common/MDXContent'
import { components } from '.velite'

const ComponentPage = ({}) => {
  console.log('components', components);

  const { pageName }: { pageName: string } = useOutletContext();

  const router = useRouter();
  const { params } = router;

  const page = components.find(item => item.name === `${pageName}-${params.slug}`);

  console.log('page', page)

  return (
    <DocPage
      data={page}
    >
      <MDXContent
        code={page.code}
      />
    </DocPage>
  )
}

export default ComponentPage
