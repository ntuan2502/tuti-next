import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Spinner } from "@nextui-org/react";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Spinner />
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
