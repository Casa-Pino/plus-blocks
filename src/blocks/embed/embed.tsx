import React, { useEffect, useRef, useState } from 'react';
import Paragraph from '../paragraph/paragraph';
import classNames from 'classnames';
import InnerHTML from 'dangerously-set-html-content';

import YouTube from 'react-youtube';

interface IEmbed {
  url: string;
  caption?: string;
  title?: string;
  classnames?: string;
  width?: string;
  height?: string;
}

export default function Embed({ width, height, url, caption, title, classnames }: IEmbed) {
  let [dangerousCopy, setDangerousCopy] = useState(<div></div>);
  let [videoLoaded, setVideoLoaded] = useState(false);
  let videoRef = useRef(null);

  let regexEXP = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

  useEffect(() => {
    if (url.match(/^.*(twitter.com)/)) {
      getTwiiter();
    }
  }, [url]);

  function getTwiiter() {
    fetch(`https://publish.twitter.com/oembed?url=${url}`)
      .then((x) => x.json())
      .then((x) => {
        setDangerousCopy(
          <figure className={classNames('my-10', classnames)}>
            <InnerHTML html={x.html}></InnerHTML>
          </figure>,
        );
      })
      .catch(() => {
        setDangerousCopy(null);
      });
  }

  function getId(url: string) {
    const match = url.match(regexEXP);

    return match && match[2].length === 11 ? match[2] : null;
  }

  function pauseAllAudios() {
    var audios = document.getElementsByTagName('audio') ?? [];

    for (let i = 0; i < audios.length; i++) {
      if (audios[i].paused == false) audios[i].pause();
    }
  }

  function playAllAudios() {
    var audios = document.getElementsByTagName('audio') ?? [];
    for (let i = 0; i < audios.length; i++) {
      if (audios[i].currentTime > 0) audios[i].play();
    }
  }

  if (url.match(regexEXP)) {
    return (
      <figure className={classNames('my-10', classnames)}>
        <div className="flex items-center">
          <YouTube
            videoId={getId(url)}
            id={'youtube-video'}
            iframeClassName={'youtube-video'}
            style={{
              width: width || '560px',
              height: height || '315px',
            }}
            title={title}
            onReady={() => {
              setVideoLoaded(true);
            }}
            onPlay={() => {
              console.log('STARTED');
              pauseAllAudios();
            }}
            onPause={() => {
              playAllAudios();
            }}
          />
        </div>
        {caption && <Paragraph>{caption}</Paragraph>}
      </figure>
    );
  } else if (url.match(/^.*(twitter.com)/)) {
    return dangerousCopy;
  }

  return (
    <figure className={classNames('my-10', classnames)}>
      <div className="flex items-center">
        <iframe
          ref={videoRef}
          width={width || '560'}
          height={height || '315'}
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      {caption && <Paragraph>{caption}</Paragraph>}
    </figure>
  );
}
