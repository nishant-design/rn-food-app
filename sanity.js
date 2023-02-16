import {createClient} from '@sanity/client';
// import myConfiguredSanityClient from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const sanityClient = createClient({
  projectId: "9gwijy1p",
  dataset: "production",
  useCdn: true,
  apiVersion: '2023-02-04',
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => {
  return builder.image(source)
};

export default sanityClient;
