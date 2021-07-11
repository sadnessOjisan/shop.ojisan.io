import { Head } from "next/document";
import { VFC } from "react";

import { Layout } from "../components/layout";
import { META_TAG_CONTENT } from "../const";
import { aboutPageStyles } from "../style/about-page.css";

const TermPage: VFC = () => (
  <div>
    <Layout>
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
      <div className={aboutPageStyles.wrapper}>
        <h2 className={aboutPageStyles.midashi}>このHPについて</h2>
        <p className={aboutPageStyles.text}>
          <a
            href="https://twitter.com/sadnessOjisan"
            className={aboutPageStyles.link}
          >
            sadnessOjisan
          </a>
          はそろそろ引っ越したいです。荷物を減らしたいです。なので僕の荷物の販売サイトを作りました。
        </p>
        <p className={aboutPageStyles.text}>
          ECそのものを作るのは骨が折れるので、
          <a href="https://microcms.io/" className={aboutPageStyles.link}>
            CMS
          </a>
          に在庫を補充・更新したらHPが更新されるJAMStackサイトを作りました。ただ、工数の都合で決済は実装していないため、購入申し込み後に表示されるメールアドレスへのメール、もしくはTwitterDMなどでのやりとりにて決済・配送をします。
        </p>
        <h2 className={aboutPageStyles.midashi}>ルール</h2>
        <p className={aboutPageStyles.text}>
          欲しい商品がある場合、商品ページに定めるフローに則って購入の申し込みをしてください。この時点では購入申し込みであり、その取引を断る権利を販売者・購入者で持ちます。
        </p>
        <p className={aboutPageStyles.text}>
          やりとりは申し込み完了後に表示されるアドレスへのメールで行います。またもしくは販売者の何らかの連絡方法を知っている方(Twitter,
          Discord, Facebook Messenger
          など)は直接そちらから連絡を取っても構いません。申し込みが済んだ段階で「商談中」ステータスとして扱います。
        </p>
        <p className={aboutPageStyles.text}>
          「商談中」ステータスでは、受け渡し方法・配送料金・返品についての確認を行います。この段階でキャンセルは可能です。もし双方ともに商談内容に納得できたら、商談を確定させ、「配送中」ステータスに移行します。なお配送中ステータスになると、原則としてキャンセルはできません。
        </p>
        <p className={aboutPageStyles.text}>
          リアルタイムでCMSを更新しない・されない都合上、同時に申し込みが複数件入る可能性がありますが、その際に誰を優先するかは販売者側で決めます。
        </p>
        <p className={aboutPageStyles.text}>
          配送は、
          <a
            href="https://www.kuronekoyamato.co.jp/ytc/customer/send/sp/"
            className={aboutPageStyles.link}
          >
            匿名配送（LINEを利用）
          </a>
          にてお願いします。ただし、販売者とプライベートで会ったことがある方は手渡しや他の配送方法でも可能であり、販売者としても助かります。
        </p>
        <p className={aboutPageStyles.text}>
          掲載している価格は送料を抜いた価格であり、送料は購入者負担にてお願いします。
        </p>
        <p className={aboutPageStyles.text}>
          購入１週間以内に、故障が原因であれば、返品が可能です。ただし送料は購入者負担にてお願いいたします。
        </p>
        <p className={aboutPageStyles.text}>
          このルールは予告なく変更する可能性があります。
        </p>
        <p className={aboutPageStyles.text}>
          このような堅苦しいやりとりはしたくないので、知り合いを優先して取引します。
        </p>
        <h2 className={aboutPageStyles.midashi}>プライバシーポリシー</h2>
        <p className={aboutPageStyles.text}>
          商談のため購入希望者の氏名・メールアドレスを収集します。この収集した情報は、
          shop.ojisan.io における購入手続きの遂行以外に利用はいたしません。
        </p>
      </div>
    </Layout>
  </div>
);

export default TermPage;
