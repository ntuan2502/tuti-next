import { Link } from '@/i18n/routing';
import {useTranslations} from 'next-intl';
 
export default function About() {
  const t = useTranslations('AboutPage');
  return (
    <div>
      <p>{t('title')}</p>
      <Link href="/">{t('home')}</Link>
    </div>
  );
}