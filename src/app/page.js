import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */ import { type } from "./../../prismicio-types.d";

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getByUID("page", "home");
  return {
    title: page.data.title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title,
      images: [
        {
          url: page.data.meta_image.url,
        },
      ],
    },
  };
}

export default async function Page() {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());
  // const settings = await client.getByType("settings");
  // console.log(settings.results[0].data.logo);
  return <SliceZone slices={page.data.slices} components={components} />;
}
