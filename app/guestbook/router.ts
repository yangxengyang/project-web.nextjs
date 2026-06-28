export async function GET() {
  return Response.json([
    { id: 1, name: "XENG" },
    { id: 2, name: "John" },
  ]);
}