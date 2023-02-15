<script setup lang="ts">
// @ts-ignore
import { VDataTable } from "vuetify/labs/VDataTable";
import { Item, AffectVal } from "./Item";
import YesNoAffectItem from "./YesNoAffectItem.vue";
import "vuetify/styles";

/*
name,
url,
signUpRequired,
download required,
openSource,
developer-oriented,
consumer-oriented,
view types [
  gantt,
  map,
  calendar,
  custom views,
]
free options,
paid options,
screenshot,
offline,
primary focus (spreadsheet, slides, general design, timelines)
*/

/*
markwhen
powerpoint
keynote
sheets
prezi
mermaid
canva
*/

const headers = [
  { title: "Tool", align: "start", sortable: true, key: "name", fixed: true },
  { title: "URL", align: "end", sortable: false, key: "url" },
  {
    title: "Sign up/Account required",
    align: "end",
    sortable: true,
    key: "signUpRequired",
  },
  {
    title: "Download required",
    align: "end",
    sortable: true,
    key: "downloadRequired",
  },
  {
    title: "Open source",
    align: "end",
    sortable: true,
    key: "openSource",
  },
  {
    title: "Developer oriented",
    align: "end",
    sortable: true,
    key: "developerOriented",
  },
  {
    title: "Consumer oriented",
    align: "end",
    sortable: true,
    key: "consumerOriented",
  },
  { title: "Free options", align: "end", sortable: true, key: "freeOptions" },
  { title: "Paid options", align: "end", sortable: true, key: "paidOptions" },
];

const good = <T>(val: T): AffectVal<T> => [val, "good"];
const bad = <T>(val: T): AffectVal<T> => [val, "bad"];
const neutral = <T>(val: T): AffectVal<T> => [val, "neutral"];

const g = good;
const b = bad;
const n = neutral;

const items: Item[] = [
  {
    name: neutral("Markwhen"),
    url: neutral("https://markwhen.com"),
    signUpRequired: good("No"),
    downloadRequired: good("No"),
    openSource: good("Yes"),
    developerOriented: neutral("Yes"),
    consumerOriented: neutral("Yes"),
    freeOptions: good("Yes"),
    paidOptions: n("Yes"),
  },
  {
    name: neutral("Powerpoint"),
    url: neutral("https://www.microsoft.com/en-us/microsoft-365/powerpoint"),
    signUpRequired: bad("Yes"),
    downloadRequired: good("No"),
    openSource: neutral("No"),
    developerOriented: neutral("No"),
    consumerOriented: neutral("Yes"),
    freeOptions: good("Yes"),
    paidOptions: n("Yes"),
  },
  {
    name: neutral("Keynote"),
    url: neutral("https://www.apple.com/keynote/"),
    signUpRequired: good("No"),
    downloadRequired: bad("Yes"),
    openSource: neutral("No"),
    developerOriented: neutral("No"),
    consumerOriented: neutral("Yes"),
    freeOptions: good("Yes"),
    paidOptions: n("No"),
  },
  {
    name: neutral("Sheets"),
    url: neutral("https://sheets.google.com"),
    signUpRequired: bad("Yes"),
    downloadRequired: good("No"),
    openSource: neutral("No"),
    developerOriented: neutral("Yes"),
    consumerOriented: neutral("Yes"),
    freeOptions: good("Yes"),
    paidOptions: n("No"),
  },
  {
    name: neutral("Prezi"),
    url: neutral("https://prezi.com/"),
    signUpRequired: bad("Yes"),
    downloadRequired: good("No"),
    openSource: neutral("No"),
    consumerOriented: neutral("Yes"),
    developerOriented: neutral("No"),
    freeOptions: n("No"),
    paidOptions: n("Yes"),
  },
  {
    name: neutral("Mermaid.js"),
    url: neutral("https://mermaid.js.org"),
    signUpRequired: good("No"),
    downloadRequired: good("No"),
    openSource: good("Yes"),
    developerOriented: neutral("Yes"),
    consumerOriented: neutral("Yes"),
    freeOptions: good("Yes"),
    paidOptions: n("No"),
  },
  {
    name: n("Canva"),
    url: n("https://canva.com"),
    signUpRequired: b("Yes"),
    downloadRequired: g("No"),
    openSource: n("No"),
    consumerOriented: n("Yes"),
    developerOriented: n("No"),
    freeOptions: g("Yes"),
    paidOptions: n("Yes"),
  },
];
</script>

<template>
  <v-app>
    <v-data-table
      :headers="headers"
      :items="items"
      class="dataTable"
      multi-sort
    >
      <template v-slot:item.name="{ item }">
        <a :href="item.raw.url[0]" v-if="item.raw.url" class="underline">{{
          item.raw.name[0]
        }}</a>
        <div class="" v-else>{{ item.raw.name[0] }}</div>
      </template>
      <template v-slot:item.url="{ item }">
        <a :href="item.raw.url" v-if="item.raw.url" class="underline">{{
          item.raw.url[0]
        }}</a>
      </template>
      <template v-slot:item.signUpRequired="{ item }">
        <yes-no-affect-item :item="item.raw.signUpRequired" />
      </template>
      <template v-slot:item.downloadRequired="{ item }">
        <yes-no-affect-item :item="item.raw.downloadRequired" />
      </template>
      <template v-slot:item.developerOriented="{ item }">
        <yes-no-affect-item :item="item.raw.developerOriented" />
      </template>
      <template v-slot:item.consumerOriented="{ item }">
        <yes-no-affect-item :item="item.raw.consumerOriented" />
      </template>
      <template v-slot:item.freeOptions="{ item }">
        <yes-no-affect-item :item="item.raw.freeOptions" /> </template
      ><template v-slot:item.paidOptions="{ item }">
        <yes-no-affect-item :item="item.raw.paidOptions" /> </template
      ><template v-slot:item.openSource="{ item }">
        <yes-no-affect-item :item="item.raw.openSource" />
      </template>
    </v-data-table>
  </v-app>
</template>

<style scoped>
.dataTable {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>