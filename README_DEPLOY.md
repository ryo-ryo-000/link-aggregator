# デプロイ方法

## 1. Vercel（推奨・無料）

### 手順：
1. [Vercel](https://vercel.com)にアクセスしてアカウント作成
2. GitHubアカウントと連携
3. このプロジェクトをGitHubにプッシュ
4. Vercelダッシュボードで「New Project」をクリック
5. GitHubリポジトリを選択
6. 「Deploy」をクリック（設定はデフォルトでOK）

### メリット：
- 無料プランで十分
- 自動デプロイ（GitHubにプッシュすると自動更新）
- SSL証明書自動設定
- カスタムドメイン対応

## 2. Netlify（無料）

### 手順：
1. プロジェクトをビルド: `npm run build`
2. [Netlify](https://www.netlify.com)にアクセス
3. ビルドした`.next`フォルダをドラッグ&ドロップ
4. または、GitHubと連携して自動デプロイ設定

## 3. 静的ホスティング（GitHub Pages等）

### 静的エクスポートの設定：
```javascript
// next.config.ts に追加
const nextConfig = {
  output: 'export',
};
```

### ビルド：
```bash
npm run build
```

### アップロード：
- `out`フォルダの中身をサーバーにアップロード

## 4. レンタルサーバー（さくら、エックスサーバー等）

### Node.js対応サーバーの場合：
1. サーバーにNode.jsをインストール
2. プロジェクトをアップロード
3. `npm install`でパッケージインストール
4. `npm run build`でビルド
5. `npm start`で起動

### 静的ファイルのみの場合：
上記の「静的ホスティング」の手順に従う

## 推奨事項

- **初心者の方**: Vercelが最も簡単
- **カスタムドメイン**: どのサービスでも設定可能
- **更新頻度が高い**: GitHub連携での自動デプロイがおすすめ

## 環境変数（必要な場合）

`.env.local`ファイルの内容は、各サービスの環境変数設定から追加してください。