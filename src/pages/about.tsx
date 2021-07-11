import { VFC } from "react";

import { Layout } from "../components/layout";

const TermPage: VFC = () => (
  <div>
    <Layout>
      <div>
        <h2>このHPについて</h2>
        <p>
          <a href="https://twitter.com/sadnessOjisan">sadnessOjisan</a>
          はいま引っ越そうとしています。荷物を減らしたいです。なので僕の荷物の販売サイトを作りました。
        </p>
        <p>
          ただし、ECそのものを作るのは骨が折れるので、<a>microCMS</a>
          に在庫を補充・更新したらそれが更新されるJAMStackサイトを作りました。そのため決済は実装しておらず、それは
          Form
          に登録するメールアドレス、もしくはTwitterDMでのやりとりにて決済・配送をします。
        </p>
        <h2>ルール</h2>
        <p>
          配送は、
          <a href="https://www.kuronekoyamato.co.jp/ytc/customer/send/sp/">
            匿名配送（LINEを利用）
          </a>
          にてお願いします。ただし、元々私とプライベートで会ったことがある方は手渡しや他の配送方法でも可能です。
        </p>
        <p>
          また、掲載している価格は送料を抜いた物であり、送料は購入者負担にてお願いします。
        </p>
      </div>
    </Layout>
  </div>
);

export default TermPage;
