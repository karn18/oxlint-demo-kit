#!/usr/bin/env bash
# สร้าง big/ ที่มีไฟล์ JS 1,500 ไฟล์ สำหรับเทียบความเร็ว ESLint กับ Oxlint (ไม่ใช่ benchmark ทางการ)
set -e
cd "$(dirname "$0")"
rm -rf big && mkdir big
for i in $(seq 1 1500); do cp src.orig/cart.js "big/cart_$i.js"; done
echo "สร้าง big/ แล้ว: $(ls big | wc -l) ไฟล์"
