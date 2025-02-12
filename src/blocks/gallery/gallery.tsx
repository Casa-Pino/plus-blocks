'use client';

import classNames from 'classnames';

interface IGallery {
  images: IImage[];
  type?: 'grid' | 'gallery';
}

interface IImage {
  caption?: string;
  url?: string;
  dangerous?: string;
  sizeSlug?: string;
  alt?: string;
}

export default function Gallery({ images, type = 'grid' }: IGallery) {
  return type == 'gallery' ? (
    <></>
  ) : (
    <figure className="flex flex-wrap">
      {images.map((x, y) => {
        return x.dangerous ? (
          <figure
            key={y}
            className="max-[650px]:w-full min-[650px]:w-2/6 relative box-border flex max-w-full flex-col justify-center"
            dangerouslySetInnerHTML={{ __html: x.dangerous }}
          >
            {x.caption && (
              <figcaption
                className={
                  x.sizeSlug
                    ? `${x.sizeSlug == 'small' ? 'text-sm' : x.sizeSlug == 'large' ? 'text-lg' : 'text-md'}`
                    : ''
                }
              >
                {x.caption}
              </figcaption>
            )}
          </figure>
        ) : (
          <figure
            key={y}
            className={classNames(
              'justify-centermax-[650px]:w-full min-[650px]:w-2/6 relative box-border flex max-w-full flex-col',
              `${x.caption ? 'h-64' : 'h-60'}`,
            )}
          >
            <img src={x.url} alt={x.alt} className="h-full w-full object-cover object-center" />
            {x.caption && (
              <figcaption
                className={
                  x.sizeSlug
                    ? `${x.sizeSlug == 'small' ? 'text-sm' : x.sizeSlug == 'large' ? 'text-lg' : 'text-md'}`
                    : ''
                }
              >
                {x.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </figure>
  );
}
