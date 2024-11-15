"use client";
// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/routing";
import { Button, Image } from "@nextui-org/react";
import { useState } from "react";

export default function HomePage() {
  const [refreshKey, setRefreshKey] = useState(0);
  // const t = useTranslations("HomePage");

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
    console.log(refreshKey); // Increment key to force re-render
  };

  return (
    <div>
      {/* <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link> */}
      <Image
        src={`https://picsum.photos/1366/768?refresh=` + refreshKey}
        loading="lazy"
        alt="picsum"
      />
      {/* <Spinner /> */}
      <Button
        color="primary"
        radius="full"
        className="my-4"
        onClick={handleRefresh}
      >
        Change
      </Button>
    </div>
  );
}
