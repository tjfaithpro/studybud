<template>
  <div>
    <div class="row my-3">
      <div class="col-12">
        <small><b>Add Content</b></small>
      </div>
    </div>

    <b-form>
      <b-row align-v="end" class="my-3">
        <div class="col-6">
          <b-form-group id="input-group-1" label="Title" label-for="input-1">
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Enter course title"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-6 d-flex flex-column align-items-end">
          <b-button 
            style="border-radius: 10px; width:8rem"
            type="submit"
            variant="primary"
            >Publish</b-button
          >
        </div>
      </b-row>
      <b-row>
        <b-col class="col-12">
          <b-form-group>
            <vue-editor placeholder="Enter the content of the course" id="editor-container" v-model="content"></vue-editor>
            <!-- <div class="editor-wrapper">
              <div id="editor-container"></div>
            </div> -->
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
// import { VueEditor } from 'vue2-quill-editor'

export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
   
  },
  mounted() {
  },
  //   components: {
  //       VueEditor
  //    },
};
</script>

<style scoped>
.quillWrapper {
  display: flex;
  flex-direction: column-reverse;
  padding-top: 45px;
  margin:0;
  top:0;
  height:63vh;
  }

   
/* custom scrollbar */
/* width */
::-webkit-scrollbar {
  width: 16px;
  height: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #898989; 
  border-radius: 10px;
  scrollbar-width: thin;
}

/* ::-webkit-scrollbar-track { */
    /* background-color: darkgrey; */

/* } */
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #514949; 
transition:all 4s;

}
</style>