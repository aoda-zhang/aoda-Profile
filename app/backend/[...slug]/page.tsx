import pageKeys from "@/constants/pageKey";
import MDXContainer from "@/shared/components/MDXContainer";
import { PostItemParam } from "@/types";
import getServerMDXContant from "@/shared/utils/getServerMDXContent";

const blogPath = `/${pageKeys.docs}/${pageKeys.be}`;

export async function generateStaticParams() {
  return getServerMDXContant(blogPath);
}

export default function PostItemPage(params: PostItemParam) {
  const [postPath] = params?.params?.slug;
  return (
    <MDXContainer
      postPath={postPath}
      fileFolder={blogPath}
      pageKey={pageKeys.be}
    />
  );
}
