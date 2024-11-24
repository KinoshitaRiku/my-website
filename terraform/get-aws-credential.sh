#!/bin/bash

ROLE_ARN=$1

# aws sts assume-role コマンドを実行
OUTPUT=$(aws sts assume-role --role-arn $ROLE_ARN --role-session-name "awscli")

# 結果から各値を抽出
AWS_ACCESS_KEY_ID=$(echo "$OUTPUT" | jq -r '.Credentials.AccessKeyId')
AWS_SECRET_ACCESS_KEY=$(echo "$OUTPUT" | jq -r '.Credentials.SecretAccessKey')
AWS_SESSION_TOKEN=$(echo "$OUTPUT" | jq -r '.Credentials.SessionToken')

# 標準出力にcredentials形式で出力
echo "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID"
echo "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY"
echo "AWS_SESSION_TOKEN=$AWS_SESSION_TOKEN"
