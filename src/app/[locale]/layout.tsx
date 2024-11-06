import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import Language from "./language";

type Params = Promise<{ locale: string }>;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // const t = await getTranslations("Layout");

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <NextTopLoader />
            {/* <Link href="/" locale="vi">
              {t("vi")}
            </Link>
            <br></br>
            <Link href="/" locale="en">
              {t("en")}
            </Link> */}
            <Language />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
