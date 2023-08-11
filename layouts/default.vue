<template>
  <img src="/images/_card.jpg" class="background" />
  <header>
    <!-- <div> -->
    <nav>
      <div class="header__logo">
        <img src="/logo_fst.png" alt="enterprise logo" />
      </div>
      <nuxt-icom name="/layout/logo" />

      <ul class="header__menu">
        <li>Acceuil</li>
        <li>Qui nous sommes</li>
        <li>Portofolio</li>
        <li>Techno & Outils</li>
        <li>Nos realisation</li>
        <li>Blog</li>
      </ul>

      <div class="header__nav_action">
        <button>Contact</button>
      </div>

      <div
        class="toogle__menu"
        @click="toogle_menu"
        :class="{ active: isActive }"
      >
        <div class="tg-menu__burger"></div>
      </div>
    </nav>
    <slot />
    <!-- </div> -->
  </header>
</template>

<script lang="ts" setup>
let isActive = ref(false);

const toogle_menu = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss">
.background {
  position: absolute;
  width: 100%;
  height: 75%;
  left: 0;
  right: 0;
  top: -106px;
  z-index: 50;
  opacity: 0.15;
}
header {
  position: relative;
  // position: sticky;
  // top: 0;
  // background-color: #ffffff;
  z-index: 50;
}

nav {

  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem 1rem 1rem;
  .header__logo img {
    width: 160px;
    max-width: 200px;
    min-width: 180;
    z-index: 100;
  }

  .header__nav_action {
    display: flex;
    align-items: center;

    button {
      appearance: button;
      background-color: #1652f0;
      border: 1px solid #1652f0;
      border-radius: 4px;
      box-sizing: border-box;
      color: #ffffff;
      cursor: pointer;
      font-size: 14px;
      line-height: 1.15;
      overflow: visible;
      padding: 10px 25px;
      position: relative;
      text-align: center;
      text-transform: none;
      transition: all 80ms ease-in-out;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: fit-content;
      :disabled {
        opacity: 0.5;
      }
      :focus {
        outline: 0;
      }
    }
  }

  .toogle__menu {
    position: relative;
    width: 48px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: rgba(233, 233, 233, 0.257);
    border-radius: 14px;

    .tg-menu__burger {
      width: 30px;
      height: 4px;
      border-radius: 5px;
      transition: all 0.5s ease-in-out;
      background-color: black;
      position: absolute;
      right: 10px;
    }
    .tg-menu__burger::before,
    .tg-menu__burger::after {
      content: "";
      position: absolute;
      background: black;
      border-radius: 5px;
      right: 0px;
      transition: all 0.5s ease-in-out;
    }

    .tg-menu__burger::before {
      width: 19px;
      height: 4px;
      transform: translateY(-9.5px);
    }

    .tg-menu__burger::after {
      width: 11px;
      height: 4px;
      transform: translateY(9.5px);
    }
  }

  .toogle__menu.active .tg-menu__burger {
    transform: translateX(-50px);
    background: transparent;
  }

  .toogle__menu.active .tg-menu__burger::before {
    width: 30px;
    transform: rotate(45deg) translate(35px, -35px);
  }

  .toogle__menu.active .tg-menu__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
    width: 30px;
  }

  .header__menu,
  .header__nav_action {
    display: none;
  }
}
</style>
