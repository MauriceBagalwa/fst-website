<template>
  <header>
    <div class="header__logo">
      <img src="/logo_fst.png" alt="enterprise logo" />
    </div>
    <nav>
      <ul class="header__menu">
        <NuxtLink to="/" class="__menu">Acceuil</NuxtLink>
        <NuxtLink to="/about_us" class="__menu">Qui nous sommes</NuxtLink>
        <NuxtLink to="/portofolio" class="__menu">Portofolio</NuxtLink>
        <NuxtLink to="/techno" class="__menu">Techno & Outils</NuxtLink>
        <NuxtLink to="/blog" class="__menu">Blog</NuxtLink>
      </ul>
    </nav>

    <div class="header__nav_action">
      <button>Contactez-nous</button>
    </div>

    <div
      class="toogle__menu"
      @click="toogle_menu"
      :class="{ active: isActive }"
    >
      <div class="tg-menu__burger"></div>
    </div>
  </header>
  <slot />
</template>

<script lang="ts" setup>
let isActive = ref(false);

const toogle_menu = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss">
header {
  position: relative;
  position: sticky;
  top: 0;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  padding: 0 0.6rem;

  background-color: whitesmoke;
  // background-color: red;
  .header__logo img {
    width: 160px;
    //   max-width: 200px;
    //   min-width: 180;
    //   z-index: 100;
  }

  .header__nav_action,
  nav {
    display: none;
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

  @media all and (min-width: 768px) {
    //   .background {
    //     // height: 75%;
    //     width: 100%;
    //     // opacity: .2;
    //   }

    //   .header__nav_action {
    //     display: flex;
    //     align-items: center;

    //     /* CSS */
    button {
      align-items: center;
      background-color: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0.25rem;
      box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
      color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
      display: inline-flex;
      font-size: 14.5px;
      font-weight: 600;
      justify-content: center;
      line-height: 1.25;
      margin: 0;
      padding: calc(0.6rem - 0.5px) calc(1.5rem - 1px);
      position: relative;
      text-decoration: none;
      transition: all 250ms;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: baseline;
      width: auto;
    }

    button:hover,
    button:focus {
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: rgba(0, 0, 0, 0.65);
    }

    button:hover {
      transform: translateY(-1px);
    }

    button:active {
      background-color: #f0f0f1;
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
      color: rgba(0, 0, 0, 0.65);
      transform: translateY(0);
    }
  }

  @media all and (min-width: 1024px) {
    .toogle__menu {
      display: none;
    }

    .header__nav_action,
    nav {
      display: block;
    }
    nav {
      width: 70%;
      .header__menu,
      .header__nav_action {
        display: flex;
      }

      .header__menu {
        display: flex;
        list-style-type: none;
        font-size: 0.8rem;
        font-weight: 700;
        justify-content: center;
        align-items: center;
        gap: 6%;

        .__menu {
          text-decoration: none;
          color: rgba(0, 0, 0, 0.85);
        }

        .__menu:hover {
          color: rgba(0, 0, 0, 0.65);
        }
      }
    }
  }
}
</style>
