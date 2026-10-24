#!/usr/bin/env bash
# คืนไฟล์ตัวอย่างให้กลับเป็นแบบมีปัญหา และลบ config ที่สร้างระหว่างเดโม
set -e
cd "$(dirname "$0")"
rm -rf src .oxlintrc.json
cp -R src.orig src
echo "reset แล้ว: src/ กลับเป็นไฟล์ต้นฉบับ และลบ .oxlintrc.json"
