<template>
  <div class="font-sans antialiased">
    <navbar></navbar>
    <div class="flex flex-wrap py-8">
      <div class="w-1/2 px-6">
        <p class="text-lg font-semibold">Check out our FAQ</p>
        <div class="px-1 py-4">
          <search-bar  search-placeholder="Search the FAQ"></search-bar>
          <single-root-panel-bar :tree="treeData" class="mt-6"></single-root-panel-bar>
        </div>
      </div>
      <div class="w-1/2 px-6">
        <p class="text-lg font-semibold">Contact Us</p>
        <div class="flex flex-wrap py-8">
          <div class="w-1/2 px-2">
            
            <div class="flex py-3">
              <!-- <div class="border border-green bg-grey-lightest rounded-full h-12 w-12 flex items-center justify-center mb-4">
              </div> -->
              <svg class="fill-current inline-block h-5 w-5 text-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"/></svg>
              <div>
                <p class="pl-3 items-ceneter">+1 678-225-0222</p>
                <p class=" pt-3 pl-3 items-ceneter">Toll Free: +1 844-TESTMNG</p>
              </div>
            </div>
            
            <div class="flex py-3">
              <!-- <div class="border border-green bg-grey-lightest rounded-full h-12 w-12 flex items-center justify-center mb-4">
              </div> -->
              <svg class="fill-current inline-block h-5 w-5 text-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
              <p class="pl-3 align-middle">quickresponse@mnglabs.com</p>
            </div>
            
            <div class="flex py-3">
              <!-- <div class="border border-green bg-grey-lightest rounded-full h-12 w-12 flex items-center justify-center mb-4">
              </div> -->
              <svg class="fill-current inline-block h-5 w-5 text-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z"/></svg>
              <p class="pl-3 align-middle">+1 678-225-0212</p>
            </div>
            
          </div>
          <div class="w-1/2 px-2">
            <table>
              <tr>
                <th></th>
              </tr>
            </table>
          </div>
        </div>
        <div class="text-center">
          <p class="underline text-lg text-green font-semibold pt-4">For Business Development Inqueries</p>
          <p class="pt-1 font-semibold">Humertero Huerta</p>
          <p class="pt-1"><span class="font-semibold">Email:</span> hhuerta@mnglabs.com</p>
          <p class="pt-1"><span class="font-semibold">Phone:</span> 657.312.2568</p>
        </div>
        <div class="text-center">
          <p class="underline text-lg text-green font-semibold pt-4">For US and Canadian Sales</p>
          <p class="pt-1 font-semibold">Eric Baker</p>
          <p class="pt-1"><span class="font-semibold">Email:</span> ebaker@mnglabs.com</p>
          <p class="pt-1"><span class="font-semibold">Phone:</span> 617.347.7290</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import SingleRootPanelBar from "@/components/SingleRootPanelBar";

export default {
  name: "contact-us",
  components: {
    Navbar,
    SearchBar,
    SingleRootPanelBar
  },
  data() {
    return {
      treeData: {
        label: "Patients",
        nodes: [
          {
            label: "Where can I view my patient's reports?",
            nodes: [
              {
                label: "Go to the reports page"
              },
              {
                label: "item1.2",
                nodes: [
                  {
                    label: "item1.2.1"
                  }
                ]
              }
            ]
          },
          {
            label: "I don't see my patient listed. What's the deal?"
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>
