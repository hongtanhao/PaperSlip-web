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
    }
  }
}
</script>
<style scoped>
  .todo-assign {
  }
</style>
