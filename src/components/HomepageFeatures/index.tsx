import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link_title: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '成為講者',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        來到 CNTUG 分享，不僅能夠分享經驗、磨練表達技巧， 演講的過程中，您也能和 CNTUG 的社群夥伴互相交流切磋， 投稿主題沒有限制，您可以用教學、心得分享、甘苦談等形式來分享。 歡迎填寫我們的 Call For Speaker (CFP) 表單報名擔任講者， 有了您的加入，CNTUG 的社群夥伴們將因您而持續成長。
      </>
    ),
    link_title: '我要分享',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd67skDYwAnDl_MO5sWIb5YxvP8yYmV0Swo4oNu7LSVtgrsUA/viewform',
  },
  {
    title: '聯絡我們',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        對於 Cloud Native Taiwan User Group 有任何想法與建議，歡迎讓我們知道！
      </>
    ),
    link_title: 'Contact Us Now',
    link: "mailto:organizers@cloudnative.tw",
  },
  {
    title: '贊助我們',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Cloud Native Taiwan User Group 歡迎廠商以及個人贊助
      </>
    ),
    link_title: '個人贊助',
    link: 'https://ocf.neticrm.tw/civicrm/contribute/transact?&id=29',
  },
];

function Feature({title, Svg, description, link, link_title}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--sponsor button--lg "
            to={link}>
            {link_title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
