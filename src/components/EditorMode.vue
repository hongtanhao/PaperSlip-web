<template>
    <div class="editor-mode">
        <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="12">
            <div>
            <label><img src="/static/images/lang.svg" width="20px"/></label>
            <a-select :defaultValue="langType" style="width: 160px;"  @change="handleChangeLangMode">
                <a-select-option v-for="(item, index) in langModes"
                :key="index"
                :value="index">{{item.modeId}}
                </a-select-option>
            </a-select>
            </div>
        </a-col>
        <a-col :span="12">
            <div>
            <label><img src="/static/images/theme.svg" width="20px"/></label>
            <a-select defaultValue="Visual Studio Dark" style="width: 200px;" @change="handleChangeTheme">
                <a-select-option v-for="(item, index) in themes" :key="index" :value="index">{{item.text}}</a-select-option>
            </a-select>
            </div>
        </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
  name: 'editor-mode'
}
</script>
<style scoped>
.editor-mode {
}
</style>
