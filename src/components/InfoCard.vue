<template>
  <div class="card shadow" style="width: 15rem; height: 16rem">
    <img
      :src="video.thumbnail || require(`@/assets/img/thumbs/${video.id}.jpeg`)"
      :alt="video.id"
      class="card-img-top"
    />
    <div class="card-img-overlay">
      <router-link
        :to="'/video/play/' + video.id"
        class="btn btn-primary btn-sm"
        :video="video"
        >Play</router-link
      >
    </div>
    <div class="tags">
      <span v-for="tag in video.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="card-body">
      <h5 class="card-title card-name">{{ video.title }}</h5>
      <p class="card-text card-description overflow-2">
        {{ video.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  data() {
    return { data: this.data };
  },
  props: {
    video: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>
