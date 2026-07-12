import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { SERVICE_LIST, getServiceByUrl } from "@/lib/services";
import { OG_IMAGE, SITE_URL } from "@/lib/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_LIST.map((s) => ({ slug: s.url }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceByUrl(slug);
  if (!service) return {};

  const canonical = `${SITE_URL}/services/${service.url}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonical,
      type: "website",
      images: [OG_IMAGE],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceByUrl(slug);
  if (!service) notFound();

  const canonical = `${SITE_URL}/services/${service.url}`;

  return (
    <>
      <JsonLd data={serviceSchema(service, canonical)} />
      <JsonLd data={faqSchema(service.faq)} />
      <JsonLd data={breadcrumbSchema(service, canonical)} />
      <ServicePage service={service} />
    </>
  );
}
