'use client';

import { Blockquote, Column, Embed, Footer, Header, Image, Paragraph, Audio } from '../../../lib/';

export default function Home() {
  return (
    <div className="w-full">
      <Embed
        {...{
          url: 'https://www.youtube.com/watch?v=0oV1eEvKl0w&list=PL7VEzant80Jnxc-UJcp0Eo9V6KncC2qtu&index=2',
          type: 'video',
          providerNameSlug: 'youtube',
          responsive: true,
          className: 'wp-embed-aspect-16-9 wp-has-aspect-ratio',
        }}
        width="100%"
      ></Embed>
    </div>
  );
}
