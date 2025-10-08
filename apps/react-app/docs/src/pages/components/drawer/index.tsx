import DocPage from '@docs/components/layout/DocPage';
import DrawerMdx from '@docs/content/docs/components/drawer.mdx';

console.log('DrawerMdx', DrawerMdx);

const DrawerPage = ({}) => {
  return (
    <DocPage>
      <DrawerMdx />
    </DocPage>
  );
};

export default DrawerPage;
