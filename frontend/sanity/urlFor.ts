import imageUrlBuilder from '@sanity/image-url';
import { MySanityClient } from './client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(MySanityClient);

export default function urlFor(source: SanityImageSource) {
  return builder.image(source)
}