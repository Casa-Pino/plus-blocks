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
                title: 'Breves',
                href: '/breves',
              },
              {
                title: 'Investimentos e Aportes',
                href: '/investimentos-e-aportes',
              },
              {
                title: 'Cidades Inteligentes',
                href: '/smart-city',
              },
              {
                title: 'Carreira e Oportunidades',
                href: '/carreira-e-oportunidades',
              },
              {
                title: 'Aplicativos e Plataformas',
                href: '/aplicativos-e-plataformas',
              },
              {
                title: 'Pesquisas e Tendências',
                href: '/pesquisas-e-tendencias',
              },
              {
                title: 'Masterboard',
                href: '/masterboard',
              },
              {
                title: 'Agrotechs',
                href: '/agrotechs',
              },
              {
                title: 'Arábia Saudita',
                href: '/arabia-saudita',
              },
              {
                title: 'Inteligência Artificial',
                href: '/inteligencia-artificial',
              },
              {
                title: 'GPTW SP 2023',
                href: '/gptw-sp-2023',
              },
              {
                title: 'Foodtechs',
                href: '/foodtechs',
              },
              {
                title: 'Marketing de Conteúdo',
                href: '/marketing-de-conteudo',
              },
              {
                title: 'Urso Consultoria Empresarial',
                href: '/urso-consultoria-empresarial',
              },
              {
                title: 'GoNew',
                href: '/gonew',
              },
              {
                title: 'Conteúdo Publicitário',
                href: '/conteudo-publicitario',
              },
              {
                title: 'Conquer',
                href: '/conquer',
              },
              {
                title: 'Some Control Summit',
                href: '/some-control-summit',
              },
              {
                title: 'PM3 Cursos',
                href: '/pm3-cursos',
              },
              {
                title: 'Brain',
                href: '/brain',
              },
              {
                title: 'Lide Paraná',
                href: '/lide-parana',
              },
              {
                title: 'Desmistificando o Corporate Venture',
                href: '/desmistificando-o-corporate-venture',
              },
            ],
          },
          {
            title: 'Opinião',
            href: '/',
            children: [
              {
                title: 'Vozes do Ecossistema',
                href: '/vozes/gazzconecta-colab',
              },
              {
                title: 'Allan Costa',
                href: '/vozes/voce-amanha',
              },
              {
                title: 'Cris Alessi',
                href: '/vozes/jornadas-de-inovacao',
              },
              {
                title: 'Rafael Mendes',
                href: '/vozes/trader-de-vendas',
              },
              {
                title: 'Beatriz Bevilaqua',
                href: '/vozes/conexao-startup',
              },
              {
                title: 'Marcelo Gripa',
                href: '/vozes/de-olho-no-futuro',
              },
              {
                title: 'Júlio Cezar Agostini',
                href: '/vozes/julio-cezar-agostini',
              },
              {
                title: 'Thiago Ayres',
                href: '/vozes/bora-crescer',
              },
              {
                title: 'Daniel Coelho',
                href: '/vozes/gamefique-se',
              },
              {
                title: 'Inteligência e Cidades',
                href: '/vozes/inteligencia-e-cidades',
              },
              {
                title: 'Itamir Viola',
                href: '/vozes/ceo-em-apuros',
              },
              {
                title: 'Mônica Berlitz',
                href: '/vozes/unidos-pelo-amor',
              },
              {
                title: 'Thiago Muniz',
                href: '/vozes/cresca-todo-dia',
              },
              {
                title: 'Aberto Para Balanço',
                href: '/vozes/aberto-para-balanco',
              },
              {
                title: 'Liderança e Influência',
                href: '/vozes/lideranca-e-influencia',
              },
              {
                title: 'LIDE Paraná',
                href: '/vozes/lide-parana-vozes',
              },
              {
                title: 'A nova economia do Micro-SaaS',
                href: '/vozes/a-nova-economia-do-micro-saas',
              },
              {
                title: 'Corporate Venture Descomplicado',
                href: '/vozes/corporate-venture-descomplicado',
              },
              {
                title: 'João Kepler',
                href: '/vozes/joao-kepler',
              },
              {
                title: 'MEX Brasil',
                href: '/vozes/mex-brasil',
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
