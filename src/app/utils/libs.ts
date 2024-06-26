import { createClient as createContentfulClient } from "contentful";

async function createClient() {
  if (!process.env.SPACE || !process.env.TOKEN) {
    throw new Error("set env variables :(");
  }
  const space = process.env.SPACE;
  const accessToken = process.env.TOKEN;
  const client = createContentfulClient({
    space: space,
    accessToken: accessToken,
  });
  return client;
}

export async function getEntry({ id }: { id: string }) {
  const client = await createClient();
  try {
    const entry = await client.getEntry((id = id));
    return entry.fields;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function getEntries({ contentType }: { contentType: string }) {
  const client = await createClient();
  try {
    const entries = await client.getEntries({ content_type: contentType });
    return entries.items;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const fetcher = (route: string) =>
  fetch(route).then((res: any) => res.json());
