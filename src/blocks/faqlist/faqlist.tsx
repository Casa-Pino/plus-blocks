'use client';

import classnames from 'classnames';
import React, { ReactNode } from 'react';

export interface IFaqItem {
  key?: string | number;
  ask: string;
  answer: string;
}

export interface IFaqList {
  list?: IFaqItem[];
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
  askClassName?: string;
  answerClassName?: string;
  icon?: ReactNode;
  askAs?: keyof JSX.IntrinsicElements;
}

export default function FaqList({
  list,
  className,
  itemClassName,
  iconClassName,
  askClassName,
  answerClassName,
  icon,
  askAs = 'p',
}: IFaqList) {
  if (!list?.length) return null;

  return (
    <div className={classnames('faqlist', className)}>
      {list.map((item, index) => {
        const key = item.key ?? index;
        return (
          <div key={key} className={classnames('faqlist-item', itemClassName)}>
            {icon ? <span className={classnames('faqlist-icon', iconClassName)}>{icon}</span> : null}
            <div className="faqlist-content">
              {React.createElement(
                askAs,
                { className: classnames('faqlist-ask', askClassName) },
                item.ask,
              )}
              <div
                className={classnames('faqlist-answer', answerClassName)}
                dangerouslySetInnerHTML={{ __html: item.answer ?? '' }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
