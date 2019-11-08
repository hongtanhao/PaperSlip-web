<template>
    <div class="todo-assign">
      <serch-assignment/>
      <assignment-list/>
    </div>
</template>
<script>
import SerchAssignment from './SerchAssignment'
import AssignmentList from './AssignmentList'
export default {
  name: 'todo-assignment',
  components: {SerchAssignment, AssignmentList}
}
</script>
<style scoped>
  .todo-assign {
    /* background-color: rgb(222,225,230); */
  }
</style>
