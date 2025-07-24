import { useRouter } from '@microui-kit/use-router'
import DocPage from '@docs/components/layout/DocPage'
import MDXContent from '@docs/components/common/MDXContent'
import { theming } from '.velite'

const ThemingPage = ({}) => {
  console.log('theming', theming);

  const router = useRouter();
  const { params } = router;

  const page = theming.find(item => item.name === `theming-${params.slug}`);

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

export default ThemingPage
