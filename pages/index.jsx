import Head from 'next/head';
import React from 'react';

// React Components
import Text from 'components/Text';

// Styles
import Styles from './index.module.scss';

const Home = () => {
  return (
    <div className={Styles['page']}>
      <Head>
        <title>Next | Dogstudio</title>
      </Head>

      <Text>Hello World!</Text>
    </div>
  );
};

// Track Re-Renders
Home.whyDidYouRender = true;

// Export Pure Component
export default React.memo(Home);
