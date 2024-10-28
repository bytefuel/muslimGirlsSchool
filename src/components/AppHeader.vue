<template>
  <header>
  <div class="tickerwrapper" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="ticker">
      <div class="list">
        <!-- Use a div for each item and replicate the items 5 times -->
        <div class="listitem" v-for="(item, index) in replicatedItems" :key="index">
          {{ item.text }}<span v-if="!item.last"> • </span>
        </div>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      items: [
        'We are Hiring …',
        '2024-2025 School Registration is now Open',
        ' Please contact @ 416-244-8600 or visit: muslimgirlsschool.com',
        'Toronto Science Fair 2024'
      ],
    };
  },
  computed: {
    replicatedItems() {
      let replicated = [];
      // Repeat 5 times
      for (let i = 0; i < 5; i++) {
        // Concatenate the items array with an indication if it's the last item in the set
        this.items.forEach((item, index, array) => {
          replicated.push({ text: item, last: i === 4 && index === array.length - 1 });
        });
      }
      return replicated;
    },
  },
};
</script>
<style scoped>
header {
  background: #700000;
  color: white;
}

.header-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(auto, 50%);
  gap: 50px; 
  align-items: center;
}

.tickerwrapper {
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.01em;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  height: 45px; /* Adjusted for line-height */
  line-height: 45px;
}

.ticker {
  display: flex;
  animation: tickerScroll 20s linear infinite;
}
.ticker:hover{
  animation-play-state: paused;
}
.list {
  display: flex;
}

.listitem {
  list-style-type:none;
  display: flex; 
  align-items: center; 

}
.listitem span {
  padding-right: 1rem;
  padding-left: 1rem;
}

@keyframes tickerScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.list:hover {
  animation-play-state: paused;
}

.header-search {
  position: relative;
  width: 50%;
}

.search-icon {
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.search-input {
  padding-left: 30px;
  border-radius: 20px;
  width: 100%;
}

@media (max-width: 768px) {
  .header-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 10px;
  }
}
</style>
