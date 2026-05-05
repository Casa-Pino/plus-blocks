'use client';

import classnames from 'classnames';
import React from 'react';

export interface ISponsorItem {
  key?: string | number;
  name?: string;
  image?: string;
  url?: string;
  alt?: string;
}

export interface ISponsors {
  list?: ISponsorItem[];
  sponsors?: ISponsorItem[];
  className?: string;
  itemClassName?: string;
  imageClassName?: string;
  imageStaticUrl?: string;
  errorImage?: string;
  title?: string;
  titleClassName?: string;
}

export default function Sponsors({
  list,
  sponsors,
  className,
  itemClassName,
  imageClassName,
  imageStaticUrl,
  errorImage,
  title,
  titleClassName,
}: ISponsors) {
  const items = list ?? sponsors ?? [];
  if (!items.length) return null;

  const resolveSrc = (image?: string) => {
    if (!image) return errorImage;
    if (!imageStaticUrl) return image;
    if (image.startsWith('http')) return image;
    return `${imageStaticUrl}${image}`;
  };

  return (
    <div className={classnames('sponsors', className)}>
      {title ? <p className={classnames('sponsors-title', titleClassName)}>{title}</p> : null}
      <div className="sponsors-list">
        {items.map((item, index) => {
          const key = item.key ?? index;
          const src = resolveSrc(item.image);
          const img = (
            <img
              src={src}
              alt={item.alt ?? item.name ?? ''}
              className={classnames('sponsors-image', imageClassName)}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                if (errorImage) (e.currentTarget as HTMLImageElement).src = errorImage;
              }}
            />
          );
          return (
            <div key={key} className={classnames('sponsors-item', itemClassName)}>
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {img}
                </a>
              ) : (
                img
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
