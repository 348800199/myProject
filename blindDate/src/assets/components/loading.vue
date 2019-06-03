<template>
  <div class="container flex_cc">
    <img src="~%/images/Loading.gif"
         alt="Loading">
  </div>
</template>


<style scoped lang="scss">
.container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}
.flex_cc {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
