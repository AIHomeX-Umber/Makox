export async function POST(req: Request) {
  const formData = await req.formData();
  const input = formData.get("input");

  return new Response(`\nMakox Plan:\n\nMarket: Likely viable if positioned correctly.\nEntry: Start with Amazon + DTC validation.\nProduct: Focus on 1 hero SKU.\nPricing: Mid-high tier with margin buffer.\n\nFirst Step:\nWrite a basic Amazon listing draft today.\n\nUser Input: ${input}`);
}
