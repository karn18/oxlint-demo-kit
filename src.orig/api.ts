// api.ts — สาธิต type-aware linting
async function save(name: string): Promise<void> {
  await Promise.resolve(name);
}

export function run(): void {
  save("order-1"); // ลืม await: ผลลัพธ์ถูกทิ้งไปเฉยๆ
  console.log("saved");
}
