<template>
  <div class="icon-gallery">
    <input
      class="search-input"
      type="text"
      v-model="query"
      placeholder="Rechercher une icône..."
    />

    <div class="categories">
      <div>Sort by category</div>
      <select class="categories" v-model="selectedCategory">
        <option
          v-for="category in categories"
          :key="category"
          class="category"
          :class="{ selected: selectedCategory === category }"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>

    <div class="icons">
      <div v-for="icon in filteredIcons" :key="icon.name" class="icon">
        <div class="img">
          <img :src="icon.path" :alt="icon.name" width="40" />
        </div>
        <p>{{ icon.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js';
import icons from '../data';
import { categorySet } from '../data';

export default {
  data() {
    return {
      query: '',
      selectedCategory: 'image',
      categories: [...categorySet],
      icons,
      fuse: null,
    };
  },
  computed: {
    filteredIcons() {
      let filteredByQuery = this.query
        ? this.fuse.search(this.query).map((result) => result.item)
        : this.icons;
      if (this.selectedCategory !== 'action') {
        filteredByQuery = filteredByQuery.filter(
          (icon) => icon.category === this.selectedCategory
        );
      }
      return filteredByQuery;
    },
  },
  mounted() {
    this.fuse = new Fuse(this.icons, { keys: ['name'] });
  },
};
</script>

<style scoped>
.search-input {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  height: 55px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 40px;
}

.icon-gallery {
  text-align: center;
}
.icons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  padding-top: 3rem;
}

.icon {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 230px;
}

.img {
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  position: relative;
}

p {
  font-size: 1rem;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
}

.icon:hover {
  p {
    white-space: normal;
    margin-bottom: 0;
  }
}

.categories {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  display: block;
}
</style>
