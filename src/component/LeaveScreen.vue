<template>
  <div class="container">
    BRA JOBBAT!
    <br>
    DU ÄR BÄST
  </div>
</template>

<script>
export default {
  name: "LeaveScreen"
}
</script>

<style scoped>
  .container{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 150px;

    color: #D16262;
    font-weight: bolder;

    user-select: none;
  }
</style>