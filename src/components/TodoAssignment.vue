<template>
    <div class="todo-assign">
      <serch-assignment @getData="handleGetData"/>
      <assignment-list :taData="taData"/>
    </div>
</template>
<script>
import SerchAssignment from './SerchAssignment'
import AssignmentList from './AssignmentList'
export default {
  name: 'todo-assignment',
  components: {SerchAssignment, AssignmentList},
  data () {
    return {
      taData: []
    }
  },
  methods: {
    handleGetData (item) {
      this.taData = item
      console.log('this.taData', this.taData)
    }
  }
}
</script>
<style scoped>
  .todo-assign {
    /* background-color: rgb(222,225,230); */
  }
</style>
