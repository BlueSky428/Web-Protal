<template>
  <div>
    <div class="">
      <table class="w-19/20 mx-auto">
          <thead>
            <tr role="header-row">
              <th class="border-t-2 border-b py-1 text-lg font-normal text-grey-darker"
                v-for="column in allColumns"
                :key=column.index
                :class="column.columnClass"
                > {{column.displayText}}
              </th> 
            </tr>
            <tr role="filter-row" v-if="options.filterByColumn" class="border-b-2">
              <th v-for="column in allColumns" :key=column.index class="bg-grey-lighter" :class="column.columnClass">
                <div class="p-1 flex">
                  <input 
                    v-show="column.filterable"
                    class="appearance-none border border-grey-light text-grey-dark w-full focus:outline-none focus:shadow h-7 focus:border-grey"
                    :disabled="!column.filterEnabled"
                    type="text"> <!-- @keydown="search() | debounce options.delay" -->
                  <button class="border ml-2 mr-1 text-grey-dark" v-show="column.filterEnabled">
                    <svg class="fill-current inline-block h-3 w-3 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z"/></svg>
                  </button>
                </div>
              </th>
            </tr>            
          </thead>
      </table>
    </div>
    <!-- colspan="{{allColumns.length}}">
    {{display([[loading]]'noResults')}} -->

    <!-- <pagination
      v-ref:pagination
      v-if="options.pagination && !options.pagination.dropdown"
      :for="id"
      :records="count"
      :per-page="parseInt(limit)"
      :chunk="options.pagination.chunk"
      :count-text="options.texts.count">
    </pagination> -->

    <div v-if="count>0 && options.pagination.dropdown" class="VuePagination">
      <p class="VuePagination__count">{{display('count', count)}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "advancedtable",
  data() {
    return {
      allColumns: [
        {
          title: "date_received",
          displayText: "Date Received",
          filterable: true,
          filterEnabled: true,
          columnClass: "zeroLgOnly:hidden"
        },
        {
          title: "faciliy_sample_id",
          displayText: "Facility Sample Id",
          filterable: true,
          filterEnabled: true,
          columnClass: "zeroLgOnly:hidden"
        },
        {
          title: "mng_sample_id",
          displayText: "MNG Sample Id",
          filterable: true,
          filterEnabled: true,
          columnClass: "zeroLgOnly:hidden"
        },
        {
          title: "patient_name",
          displayText: "Patient Name",
          filterable: true,
          filterEnabled: true,
          columnClass: ""
        },
        {
          title: "dob",
          displayText: "DOB",
          filterable: true,
          filterEnabled: false,
          columnClass: ""
        },
        {
          title: "physician",
          displayText: "Physician",
          filterable: true,
          filterEnabled: false,
          columnClass: ""
        },
        {
          title: "test_code",
          displayText: "Test Code",
          filterable: true,
          filterEnabled: false,
          columnClass: ""
        },
        {
          title: "order_status",
          displayText: "Status",
          filterable: true,
          filterEnabled: false,
          columnClass: ""
        }
      ],
      options: {
        filterByColumn: true
      },
      dateColumns: [],
      listColumns: {},
      datepickerOptions: {
        locale: {
          cancelLabel: "Clear"
        }
      },
      perPage: 10,
      perPageValues: [10, 25, 50, 100],
      params: {},
      sortable: true,
      trackBy: "$index",
      filterable: true,
      filtersInitialValues: {},
      customFilters: [],
      templates: {},
      compileTemplates: false,
      delay: 500,
      dateFormat: "DD/MM/YYYY",
      toMomentFormat: false,
      skin: "table-striped table-bordered table-hover",
      wrapperClasses: "",
      columnsDisplay: {},
      texts: {
        count: "{count} Records",
        filter: "Filter Results:",
        filterPlaceholder: "Search query",
        limit: "Records:",
        page: "Page:",
        noResults: "No matching records",
        filterBy: "Filter by {column}",
        loading: "Loading...",
        defaultOption: "Select {column}"
      },
      sortIcon: {
        base: "glyphicon",
        up: "glyphicon-chevron-up",
        down: "glyphicon-chevron-down"
      },
      filterByColumn: false,
      highlightMatches: false,
      orderBy: false,
      footerHeadings: false,
      rowClassCallback: false,
      headings: {},
      pagination: {
        dropdown: false,
        chunk: 10
      }
    };
  }
};
</script>

<style>
</style>
