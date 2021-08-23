<template>
  <div class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-dark linkbar video-navbar">
      <a class="navbar-brand ml-5" href="#">Components</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContents">
        <span class="navbar-toggler-icon"/>
      </button>
      <div class="collapse navbar-collapse" id="navbarContents">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/spc" class="nav-link"
              >SearchablePaginatedView</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "Components",
};
</script>
