<template>
<div>
  <div class="row my-3">
      <div class="col-12">
        <small>All Student</small>
        <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      show-empty
      small
      @filtered="onFiltered"
      borderless
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(state)="row">
        <button class="btn btn-success rounded-pill m-0 pt-1 d-flex justify-content-center align-items-center" style="height:20px; width:70px" v-if="row.value.state=='Active'" pill  @click="test()"  >
         <small> {{row.value.state}} </small>
        </button>
         <button class="btn btn-danger rounded-pill  m-0 pt-1 d-flex justify-content-center align-items-center" style="height:20px; width:70px" v-if="row.value.state=='Down'" pill  @click="test()"  >
         <small> {{row.value.state}} </small>
        </button>
        
      </template> 
        <template #cell(action)>
        <div>
            ...
        </div>
      </template> 
    </b-table>
      </div>
    </div>
    <b-row>
      <b-col sm="7" md="4" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>
    </div>
</template>

<script>
// Name
// Date
// Course
// Groups
// State
export default {
    data(){
        return{
           items: [
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Active'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''},
              {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Active'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''},
                    {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Active'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''},
              {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Active'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''},
               {name: { first: 'Dickerson', last: 'Macdonald' }, date:'15/3/2021', course:'UI/UX', groups:2, state:{state:'Down'}, action:''}
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
       
        }
    },
     mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods:{
        test(){
            alert('test')
        }
    }
}
</script>

<style>

</style>