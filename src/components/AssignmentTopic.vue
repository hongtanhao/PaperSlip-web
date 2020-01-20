<template>
    <div class="assignment-topic">
      <h3><img src="/static/images/hand.svg" width="20px"/>&nbsp;&nbsp;<span>{{ topic }}</span></h3>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'assignment-topic',
  computed: {
    ...mapState({
      topic: state => state.assignment.work.topic
    })
  },
  mounted () {
  }
}
</script>
<style scoped>
.assignment-topic  span{
  font-size: 24px;
  font-weight: bolder;
  text-align: left;
}

.assignment-topic img {
  position: relative;
  vertical-align: middle;
  top: -5px;
}
.dot {
  display: inline-block;
  height: 1rem;
  width: 1rem;
  background-color: seagreen;
  border-radius: 100%;
  position: relative;
  vertical-align: middle;
  margin-right: 1rem;
}
</style>
