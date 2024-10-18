import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/firebase';

// Post型を定義
type Post = {
  title: string;
  content: string;
};

// `PageServerLoad` 型を指定して、サーバーサイドで実行される `load` 関数
export const load = async () => {
  const querySnapshot = await getDocs(collection(db, 'test'));
  const posts = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      title: data.title,
      content: data.content,
    } as Post;
  });

  console.log('All posts (SSR/SSG):', posts);

  return {
    posts
  };
};
