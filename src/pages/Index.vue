<template>
  <div class="paper-index">
    <paper-header/>
    <paper-main/>
  </div>
</template>
<script>
import PaperHeader from '@/components/PaperHeader'
import PaperMain from '@/components/PaperMain'
export default {
  name: 'login',
  components: {
    PaperHeader, PaperMain
  }
}
</script>
<style scoped>
</style>
