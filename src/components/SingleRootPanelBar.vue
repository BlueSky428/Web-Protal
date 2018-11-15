<template>
  <div>
    <div 
      class="py-1 text-red font-normal select-none hover:cursor-pointer" 
      @click="expanded = !expanded"
      :class="[expanded == true ? 'font-medium border-b-2 border-green' : 'hover:cursor-pointer hover:opacity-50']" 
      >
      {{tree.label}}
    </div>
    <single-root-panel-bar 
      v-for="node in tree.nodes" 
      :key=node.index 
      :tree = "node"
      :depth = "depth+1" 
      v-if="expanded"
      class="ml-4" > 
        {{node.label}}
    </single-root-panel-bar >
  </div>
</template>

<script>
import SingleRootPanelBar from "@/components/SingleRootPanelBar";

export default {
  name: "single-root-panel-bar",
  props: {
    tree: Object,
    depth: {
      type: Number,
      default: 0
    }
  },
  components: {
    SingleRootPanelBar
  },
  data() {
    return {
      expanded: false
    };
  }
};
</script>

<style>
</style>
