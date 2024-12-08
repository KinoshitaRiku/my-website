# profile-website

<a href="https://kinoshitariku.github.io/profile-website/" target="_blank" rel="noopener noreferrer">site-url</a>

## TODO

- 文章の作成

## DONE

- お問い合わせフォームを作成
  - Google フォーム と Google スプレッドシートで構築
- レスポンシブ対応
- カスタムドメイン
- タブアイコンの設定
- SEO 対策
  - メタタグ
  - OGP 設定
  - 構造化データ（Schema.org）
  - robots.txt, sitemap.xml
  - canonical URL 設定
  - Google Search Console
- セキュリティ対策

## terraform

- terraform の実行: devcontainer
- tfstate: ローカルで管理
- AWS 認証情報: AWS CloudShell から認証情報を出力
  ```
  sh get-aws-credential.sh arn:aws:iam::<AWSアカウントID>:role/kinoshita-credentials
  ```
