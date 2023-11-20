import {I18nProviderClient} from "@/locales/client";

export default function MainLayout({
    children,
    auth,
    params: { locale }
}: {
    children: React.ReactNode,
    auth: React.ReactNode,
    params: { locale: string }
}) {
    return  (
        <I18nProviderClient locale={locale}>
            {children}
            {auth}
        </I18nProviderClient>
    )
}