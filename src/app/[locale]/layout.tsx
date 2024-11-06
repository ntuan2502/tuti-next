import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link, routing } from "@/i18n/routing";
import NextTopLoader from 'nextjs-toploader';

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

  const t = await getTranslations('Layout');

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <NextTopLoader />
        <Link href="/" locale="vi">{t('vi')}</Link>
        <br></br>
        <Link href="/" locale="en">{t('en')}</Link>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
