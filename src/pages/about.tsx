import Head from "next/head";
import { VFC } from "react";

import { Layout } from "../components/layout";
import { META_TAG_CONTENT } from "../const";
import { aboutPageStyles } from "../style/about-page.css";

const TermPage: VFC = () => (
  <div>
    <Head>
      <title>{`About | ${META_TAG_CONTENT.siteTitle}`}</title>
      <meta property="og:url" content={`${META_TAG_CONTENT.origin}/about`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`about | ${META_TAG_CONTENT.siteTitle}`}
      />
      <meta property="og:site_name" content={META_TAG_CONTENT.siteTitle} />
    </Head>
    <Layout>
      <div className={aboutPageStyles.wrapper}>
        <h2 className={aboutPageStyles.midashi}>このHPについて</h2>
        <p className={aboutPageStyles.text}>
          <a
            href="https://twitter.com/sadnessOjisan"
            className={aboutPageStyles.link}
          >
            sadnessOjisan
          </a>
          はそろそろ引っ越したいです。荷物を減らしたいです。なので僕の荷物の不用品情報サイトを作りました。通信販売サイトではありません。
        </p>
        <p className={aboutPageStyles.text}>
          ECそのものを作るのは骨が折れるので、
          <a href="https://microcms.io/" className={aboutPageStyles.link}>
            CMS
          </a>
          に在庫を補充・更新したらHPが更新されるJAMStackサイトを作りました。ただ、工数の都合で決済は実装していないため、もしくはTwitterDMなどでのやりとりにて決済・配送をします。
        </p>
        <h2 className={aboutPageStyles.midashi}>ルール</h2>
        <p className={aboutPageStyles.text}>
          欲しい商品がある場合、販売者の何らかの連絡方法(Twitter, Discord,
          Facebook Messenger
          など)に連絡をください。「商談中」ステータスとして扱います。
        </p>
        <p className={aboutPageStyles.text}>
          「商談中」ステータスでは、受け渡し方法・価格・配送方法・返品についての相談・確認を行います。この段階でキャンセルは可能です。もし双方ともに商談内容に納得できたら、商談を確定させ、「配送中」ステータスに移行します。なお配送中ステータスになると、原則としてキャンセルはできません。
        </p>
        <p className={aboutPageStyles.text}>
          リアルタイムでCMSを更新しない・されない都合上、同時に申し込みが複数件入る可能性がありますが、その際に誰を優先するかは販売者側で決めます。
        </p>
        <p className={aboutPageStyles.text}>
          基本的に配送は、
          <a
            href="https://www.kuronekoyamato.co.jp/ytc/customer/send/sp/"
            className={aboutPageStyles.link}
          >
            匿名配送（LINEを利用）
          </a>
          にてお願いします。ただし、販売者とプライベートで会ったことがある方は手渡しや他の配送方法でも可能であり、販売者としても助かります。
        </p>
        <p className={aboutPageStyles.text}>
          このルールは予告なく変更する可能性があります。
        </p>
        <p className={aboutPageStyles.text}>
          申込者からの連絡に応じて価格や配送時期を決める都合上、特定商取引法に基づく表記に関する事項は、その連絡の際に問い合わせていただけると遅延なく提示いたします。
        </p>
        <p className={aboutPageStyles.text}>
          堅苦しいやりとりはしたくないので、知り合いを優先して取引します。
        </p>
        <h2 className={aboutPageStyles.midashi}>プライバシーポリシー</h2>
        <p className={aboutPageStyles.text}>
          商談のため購入希望者の氏名・メールアドレス・LINE
          IDを収集します。この収集した情報は、 shop.ojisan.io
          における購入手続きの遂行以外に利用はいたしません。
        </p>
      </div>
    </Layout>
  </div>
);

export default TermPage;
