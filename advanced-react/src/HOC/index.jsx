import React, { useState, useEffect } from 'react';
import { BlogPost } from './BlogPost';
import { CommentList } from './CommentList';
import useSWR, { SWRConfig } from 'swr';
import { withSubscription } from './withSubscription';

export const HOCExample = () => {
  const { data } = useSWR('https://fakerapi.it/api/v1/images?_width=380');
  const [hocData, setHocData] = useState(data);

  useEffect(() => {
    setHocData(data);
  }, [data]);

  const CommentListWithSubscription = withSubscription(CommentList, hocData);
  const BlogPostWithSubscription = withSubscription(BlogPost, hocData);

  return (
    <>
      {CommentListWithSubscription}
      {BlogPostWithSubscription}
    </>
  );
};
