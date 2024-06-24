import "server-only";

import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getExperience() {
  const databaseId = "eb4f8b8849224d4eb8adf77ce3cbbead";
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results.map((page) => ({
    id: page.id,
    title: page.properties["Title"].title[0].plain_text,
    company: page.properties["Company"].rich_text[0].plain_text,
    time_unit: page.properties["Time Unit"].rich_text[0].plain_text,
    languajes: page.properties["Lenguajes"].multi_select,
    working: page.properties["Working"].checkbox,
    time: page.properties["Time"].number,
    desc: page.properties["Description"].rich_text[0].plain_text,
    // dorsal: page.properties["Dorsal"].number,
    // pos: page.properties["Posicion"].rich_text[0].plain_text,
  }));

  // return response;
}

export async function getProjects() {
  const databaseId = "6a315644ca3e4def9aba3c08142437a9";
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results.map((page) => ({
    id: page.id,
    title: page.properties["Title"].title[0].plain_text,
    frameworks: page.properties["Frameworks"].multi_select,
    order: page.properties["Order"].number,
    desc: page.properties["Description"].rich_text[0].plain_text,
    desc_en: page.properties["Description_En"].rich_text[0].plain_text,
    awards: page.properties["Awards"].multi_select,
    github: page.properties["Github"].url,
    url: page.properties["URL"].url,
    // titleHackathon: page.properties["TitleHackathon"].rich_text[0].plain_text,
    isHackathon: page.properties["Is Hackathon"].checkbox,
    image: page.properties["Image"].url,
    // dorsal: page.properties["Dorsal"].number,
    // pos: page.properties["Posicion"].rich_text[0].plain_text,
  }));

  // return response;
}
