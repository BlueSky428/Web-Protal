<template>
  <div>
    <navbar></navbar>
    <div role="filter-row" class="flex flex-wrap uppercase text-2xl select-none ml-12 pt-12">
      <!-- <div :selected="true"  class="mx-4" :class="[selected ? 'font-medium border-b-2 border-green' : 'hover:cursor-pointer hover:opacity-50']">All</div>
      <div :selected="false" class="mx-4" :class="[selected ? 'font-medium border-b-2 border-green' : 'hover:cursor-pointer hover:opacity-50']">On Hold</div>
      <div :selected="false" class="mx-4" :class="[selected ? 'font-medium border-b-2 border-green' : 'hover:cursor-pointer hover:opacity-50']">In The Lab</div>
      <div :selected="false" class="mx-4" :class="[selected ? 'font-medium border-b-2 border-green' : 'hover:cursor-pointer hover:opacity-50']">Complete</div>
      <div :selected="false" class="mx-4" :class="[selected ? 'font-medium border-b-2 border-green' : 'hover:cursor-pointer hover:opacity-50']">Rejected/Cancelled</div> -->
      <div v-for="status in StatusOptions" 
        :key=status.index  
        class="mx-4" 
        :class="[status.name == selectedStatus ? 'font-medium border-b-2 border-blue' : 'hover:cursor-pointer hover:opacity-50']" 
        @click= "selectedStatus=status.name">{{status.name}}</div>
    </div>

    <div role="search-bar" class="pt-8 pb-4 px-4">
      <search-bar @search="handleSearchBarInput($event)" search-placeholder = "Search by name, date of birth, identifier, physician, or test code"></search-bar>
    </div>

    <div class="py-6 px-4 font-bold">This will be the search val: {{searchVal}}</div>
    <div class="py-6 px-4 font-bold">This will be the filter val: {{selectedStatus}}</div>

    <!-- <div role="table" class = "container mx-auto py-6">
    <table class="container mx-auto border-2 rounded-lg shadow py-6">
        <tr class = "border-y-2">
        <th class="text-left uppercase bg-grey-lighter font-semibold font-grey-dark py-2">Name</th>
        <th class="text-left uppercase bg-grey-lighter font-semibold font-grey-dark py-2">Status</th>
        </tr>
        <tr class = "border-t-2 border-y-2 py-4">
        <td class="py-4 px-4">
            <div class="text-lg font-semibold pb-1">Paul DeVito</div>
            <div class="text-xs text-grey-dark">06/18/1991</div>
        </td>
        <td class="border-t-2 px-2 text-center w-1/6">
            <div class="inline-block px-4 rounded-full bg-green-light text-green-darker font-semibold text-sm py-1">
            Complete
            </div>
        </td>
        </tr>
    </table>
    </div>

    <div role="table" class = "container mx-auto py-6">
    <table class="border-2 shadow py-6">
      <tr class = "border-y-2">
        <th class="text-left uppercase bg-grey-lighter font-semibold font-grey-dark py-2 px-2">Name</th>
        <th class="text-left uppercase bg-grey-lighter font-semibold font-grey-dark py-2 px-2">DOB</th>
        <th class="text-left uppercase bg-grey-lighter font-semibold font-grey-dark py-2 px-2">Status</th>
      </tr>
      <tr class = "border-t-2 border-y-2 py-4">
        <td class="py-4 px-4">
          <div class="">Paul DeVito</div>
        </td>
        <td>
          <div class="">06/18/1991</div>
        </td>
        <td class="border-t-2 px-2  w-1/6">
          <div class="inline-flex px-4 rounded-full bg-green-light text-green-darker font-semibold text-sm py-1">
            Complete
          </div>
        </td>
      </tr>
    </table>
    </div> -->
    <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->

    <advanced-table></advanced-table>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import AdvancedTable from "@/components/AdvancedTable";

export default {
  name: "reports",
  components: {
    Navbar,
    SearchBar,
    AdvancedTable
  },
  data() {
    return {
      searchVal: "",
      selectedStatus: "ALL",
      StatusOptions: [
        { id: 1, name: "ALL", selected: true },
        { id: 2, name: "ON HOLD", selected: false },
        { id: 3, name: "IN THE LAB", selected: false },
        { id: 4, name: "COMPLETE", selected: false },
        { id: 5, name: "REJECTED/CANCELLED", selected: false }
      ]
    };
  },
  methods: {
    handleSearchBarInput(passedSearchVal) {
      this.searchVal = passedSearchVal;
    }
  }
};
</script>