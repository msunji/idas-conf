import { serialize } from 'next-mdx-remote/serialize';

const getMarkdown = async (dataArr, markdown) => {
  return Promise.all(
    dataArr.map(async (elem) => {
      return { ...elem, [markdown]: await serialize(elem[markdown]) };
    })
  );
};

export default getMarkdown;
