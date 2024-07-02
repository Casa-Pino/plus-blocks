'use client';

import { Blockquote, Column, Embed, Footer, Header, Image, Paragraph, Audio } from '../../../lib/';

export default function Home() {
  return (
    <div className="w-full">
      <Audio url="https://static.casapino.com.br/casapino/2024/06/27173603/soul-of-the-sun-179325.mp3" controls></Audio>
      <Embed url="https://www.youtube.com/embed/GHhAifvMJLc"></Embed>
    </div>
  );
}
