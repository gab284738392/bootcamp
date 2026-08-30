import Portfolio from "@/components/Portfolio";
import { getPortfolio } from "@/lib/actions/portfolio";

export default async function Page() {
  const email = "eme@gmail.com";
  const portfolio = await getPortfolio(email);

  return <Portfolio portfolio={portfolio} />;
}
