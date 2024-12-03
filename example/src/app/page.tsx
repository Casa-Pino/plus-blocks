'use client';

import { Blockquote, Column, Embed, Footer, Header, Image, Paragraph, Audio } from '../../../lib/';

export default function Home() {
  return (
    <div className="w-full">
      <Header
        newHeaderDesktop
        className={{
          headerClass: 'headerClass !bg-[#000]',
          textClassDesktop: '!text-sm !text-white hover:!text-[#00DFEB] [&_>_svg]:!text-white',
          dialogClass: '!bg-black',
          linkClass: '!text-white hover:!font-bold hover:!text-[#00DFEB]',
        }}
        onSubmit={(e: string) => {
          let url = encodeURI(e);
        }}
        routes={[
          {
            title: 'Página Principal',
            href: '/',
          },
          {
            title: 'Assuntos',
            href: '/',
            children: [
              {
                title: 'Receitas e Pratos',
                href: '/receitas-pratos',
              },
              {
                title: 'Premio bom gourmet',
                href: '/premiobomgourmet',
              },
              {
                title: 'Festival bom gourmet',
                href: 'https://www.festivalbomgourmet.com.br/',
              },
              {
                title: 'Histórias',
                href: '/historias',
              },
              {
                title: 'The Next Chef',
                href: '/the-next-chef',
              },
            ],
          },
          {
            title: 'Colunistas',
            href: '/',
            children: [
              {
                title: 'O que fazer em Curitiba',
                href: '/vozes/o-que-fazer-em-curitiba/',
              },
              {
                title: 'Notas Baquicas',
                href: '/vozes/notas-baquicas/',
              },
              {
                title: 'Vosso Blog de Comida',
                href: '/vozes/vosso-blog-de-comida/',
              },
              {
                title: 'Panela do Anacreon',
                href: '/vozes/panela-do-anacreon/',
              },
              {
                title: 'O Mundo Doce',
                href: 'https://bomgourmet.com/bomgourmet/o-mundo-doce/',
              },
            ],
          },
        ]}
        theme="dark"
        darkLogo="https://au.eragroup.com/wp-content/uploads/2018/02/logo-placeholder.png"
        lightLogo="https://au.eragroup.com/wp-content/uploads/2018/02/logo-placeholder.png"
        haveLogin={false}
        focusColor={'#00DFEB'}
        backgroundColorL={'#fff8e7'}
        backgroundColorD={'#fff8e7'}
        iconColor={'#fff'}
        unFocusColor={'#000'}
        borderHeight={2}
        placeholderColor="#CB0023"
      />
    </div>
  );
}
