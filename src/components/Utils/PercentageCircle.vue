<template>
  <svg viewBox="0 0 36 36" class="circular-chart">
    <path class="circle"
          :stroke-dasharray="strokeDasharray"
          d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <text x="18" y="20.35" class="percentage">{{percentage}}%</text>
  </svg>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent( {
  name: "PercentageCircle",
  props: {
    'size': {
      type: Number,
      default: 15,
      required: false
    },
    'percentage': {
      type: Number,
      default: 100,
      required: false
    },
    'strokeWidth': {
      type: Number,
      default: 1,
      required: false
    },
    'color': {
      type: String,
      default: '#444',
      required: false
    }
  },
  computed: {
    strokeDasharray() {
      return this.percentage + ", 100";
    }
  }
});
</script>

<style>
.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 70px;
  max-height: 70px;
}

.circle {
  stroke: #3BA55D;
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

.percentage {
  fill: #b9bbbe;
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
}
</style>

