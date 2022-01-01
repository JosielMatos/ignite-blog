import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): ReactElement {
  return (
    <>
      <Header />
      <img src="/Banner.png" alt="banner" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <h1>Super título</h1>
            <ul>
              <li>
                <FiCalendar />
                14 Dez 2021
              </li>
              <li>
                <FiUser />
                Jonathan Silva
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>
          <article className={styles.postContent}>
            <h2>Título da seção</h2>
            <p>
              Lorem ipsum dolor sit amet{' '}
              <strong>consectetur adipisicing elit</strong>. Non corporis,
              exercitationem rem quam iusto ab consequatur tempore sed atque
              quae beatae autem numquam animi <a href="/">architecto</a> ut
              repellat quo fugit debitis!
              <ul>
                <li>lorem master</li>
                <li>ui section menu oliver</li>
              </ul>
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
