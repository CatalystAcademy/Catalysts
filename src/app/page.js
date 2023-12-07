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
  // console.log(page.data.slices.find((slice) => slice.slice_type ==='blogs'));
  return <SliceZone slices={page.data.slices} components={components} />;
}
