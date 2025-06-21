#!/bin/bash

# GitHubリポジトリのURLを設定（YOUR_USERNAME を実際のユーザー名に置き換えてください）
# 例: git remote add origin https://github.com/YOUR_USERNAME/link-aggregator.git

echo "GitHubにプッシュする手順："
echo "1. GitHubで新しいリポジトリを作成してください"
echo "2. 以下のコマンドを実行（YOUR_USERNAMEを自分のGitHubユーザー名に置き換え）："
echo ""
echo "git remote add origin https://github.com/YOUR_USERNAME/link-aggregator.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""
echo "または、SSHを使用する場合："
echo "git remote add origin git@github.com:YOUR_USERNAME/link-aggregator.git"
echo "git branch -M main"
echo "git push -u origin main"