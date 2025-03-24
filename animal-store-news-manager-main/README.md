
# アニマルストア管理システム

## プロジェクト情報

**URL**: https://lovable.dev/projects/789afe8f-1293-4523-aba1-580beee89b33

## ファイル構成と説明

### コアファイル

- **src/main.tsx**: アプリケーションのエントリーポイント。ReactアプリをDOMにレンダリングします。
- **src/App.tsx**: メインのアプリケーションコンポーネント。ルーティングとプロバイダーの設定を行います。
- **src/index.css**: グローバルなCSSスタイル。
- **src/App.css**: アプリケーション全体のスタイル。

### データモデル

データモデルは `src/types/models.ts` で定義されています。主なモデルは：

- **Animal**: 動物の情報を管理します。
  - id, name（名前）, species（種類）, breed（品種）, age（年齢）, description（説明）, imageUrl（画像）, storeId（店舗ID）など

- **Store**: 店舗情報を管理します。
  - id, name（店舗名）, address（住所）, phone（電話番号）, email（メール）, description（説明）, imageUrl（画像）など

- **News**: ニュース記事を管理します。
  - id, title（タイトル）, content（内容）, imageUrl（画像）, published（公開状態）, publishedAt（公開日時）など

- **Profile**: ユーザープロフィール情報を管理します。
  - id, name（名前）, email（メール）, role（役割）, avatarUrl（アバター画像）, phone（電話番号）, bio（自己紹介）など

### データサービス

データの操作は `src/lib/data-service.ts` で管理されています。このファイルには：

- データの取得（get）、作成（create）、更新（update）、削除（delete）のメソッド
- モックデータの管理
- 統計情報の生成

データを変更したい場合は、このファイルを編集してください。

### コンテキスト

アプリケーション全体で状態を共有するためのコンテキスト：

- **src/contexts/AuthContext.tsx**: 認証状態（ログイン/ログアウト）を管理します。
- **src/contexts/DataContext.tsx**: データサービスへのアクセスを提供します。
- **src/contexts/ActivityContext.tsx**: アクティビティログを管理します。

### コンポーネント

コンポーネントは主に2つのディレクトリに分かれています：

#### UI コンポーネント
`src/components/ui/` ディレクトリには、shadcn/uiライブラリのコンポーネントがあります：
- button.tsx, card.tsx, input.tsx など - 基本的なUIコンポーネント

#### ダッシュボードコンポーネント
`src/components/dashboard/` ディレクトリには、ダッシュボード専用のコンポーネントがあります：
- **DashboardLayout.tsx**: ダッシュボードの全体レイアウトを定義
- **DashboardSidebar.tsx**: サイドバーナビゲーションを提供
- **StatCard.tsx**: 統計情報を表示するカード
- **ActivityLog.tsx**: アクティビティログを表示
- **NotificationPopover.tsx**: 通知ポップオーバー
- **ProgressCircle.tsx**: 進捗を円グラフで表示

### ページ

`src/pages/` ディレクトリには、アプリケーションの各ページが含まれています：

- **Index.tsx**: トップページ
- **LoginPage.tsx**: ログインページ
- **NotFound.tsx**: 404エラーページ

#### ダッシュボードページ
`src/pages/dashboard/` ディレクトリには、ダッシュボード内の各ページがあります：
- **Dashboard.tsx**: メインダッシュボード（ホーム）
- **AnimalsPage.tsx**: 動物管理ページ
- **StoresPage.tsx**: 店舗管理ページ
- **NewsPage.tsx**: ニュース管理ページ
- **SettingsPage.tsx**: 設定ページ
- **ProfilePage.tsx**: プロフィールページ

### ユーティリティ

- **src/lib/utils.ts**: 汎用ユーティリティ関数
- **src/lib/mock-data.ts**: 開発用のモックデータ

## ユーザー名とパスワードの変更方法

### ログイン情報

デフォルトのログイン情報：
- **ユーザー名**: `admin`
- **パスワード**: `password`

### ユーザー名とパスワードの変更方法

1. **設定ページでの変更**:
   - ダッシュボードにログイン後、左側のサイドバーから「設定」をクリックします。
   - 「アカウント設定」セクションでユーザー名を変更できます。
   - 「パスワード変更」セクションで現在のパスワードと新しいパスワードを入力して変更できます。
   - 「保存」または「パスワードを変更」ボタンをクリックして変更を適用します。

2. **コードでの変更（開発者向け）**:
   - `src/pages/LoginPage.tsx` ファイルを開きます。
   - `onSubmit` 関数内の認証条件を変更します:
   ```typescript
   // Hard-coded credentials for demo (in a real app, this would be handled securely)
   if (data.username === '新しいユーザー名' && data.password === '新しいパスワード') {
     // ... 認証処理
   }
   ```

## 開発方法

### Lovableを使用する

[Lovableプロジェクト](https://lovable.dev/projects/789afe8f-1293-4523-aba1-580beee89b33)にアクセスして、プロンプトを使用して開発を開始します。
Lovableを通じて行われた変更は、このリポジトリに自動的にコミットされます。

### 好みのIDEを使用する

ローカルで作業したい場合は、このリポジトリをクローンして変更をプッシュできます。プッシュされた変更はLovableにも反映されます。

必要なのはNode.jsとnpmのインストールだけです - [nvmでインストール](https://github.com/nvm-sh/nvm#installing-and-updating)

以下の手順に従ってください：

```sh
# ステップ1：プロジェクトのGit URLを使用してリポジトリをクローンします。
git clone <YOUR_GIT_URL>

# ステップ2：プロジェクトディレクトリに移動します。
cd <YOUR_PROJECT_NAME>

# ステップ3：必要な依存関係をインストールします。
npm i

# ステップ4：自動リロードと即時プレビュー機能を備えた開発サーバーを起動します。
npm run dev
```

### GitHubで直接ファイルを編集する

- 目的のファイルに移動します。
- ファイルビューの右上にある「編集」ボタン（鉛筆アイコン）をクリックします。
- 変更を加えて変更をコミットします。

### GitHub Codespacesを使用する

- リポジトリのメインページに移動します。
- 右上付近にある「Code」ボタン（緑色のボタン）をクリックします。
- 「Codespaces」タブを選択します。
- 新しいCodespace環境を起動するには、「New codespace」をクリックします。
- Codespace内で直接ファイルを編集し、完了したら変更をコミットしてプッシュします。

## プロジェクトに使用されている技術

このプロジェクトは以下の技術で構築されています：

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## プロジェクトのデプロイ方法

[Lovable](https://lovable.dev/projects/789afe8f-1293-4523-aba1-580beee89b33)を開いて、共有 -> 公開をクリックするだけです。

## カスタムドメインは使用できますか？

現在カスタムドメインはサポートされていません（まだ）。独自のドメインでプロジェクトをデプロイしたい場合は、Netlifyを使用することをお勧めします。詳細については、ドキュメントをご覧ください：[カスタムドメイン](https://docs.lovable.dev/tips-tricks/custom-domain/)
