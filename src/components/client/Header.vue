<template>
  <!-- <div>
    <ul class="menu-bar">
      <li>
        <router-link :to="'/trang-chu'"> Trang chủ </router-link>
      </li>
      <li>
        <router-link :to="'/tong-quan'"> Tổng quan </router-link>
      </li>
      <li>
        <router-link :to="'/lien-he'"> Liên hệ </router-link>
      </li>
      <li>
        <router-link :to="'/dang-ky'"> Đăng ký </router-link>
      </li>
      <li>
        <router-link :to="'/dang-nhap'"> Đăng nhập </router-link>
      </li>
    </ul>
  </div> -->
  <header class="main_h">
    <div class="row">
      <a class="logo" href="#">L/F</a>
      <div class="mobile-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul>
          <li><router-link :to="'/trang-chu'"> Trang chủ </router-link></li>
          <li><router-link :to="'/tong-quan'"> Tổng quan </router-link></li>
          <li><router-link :to="'/lien-he'"> Liên hệ </router-link></li>
          <li><router-link :to="'/dang-ky'"> Đăng ký </router-link></li>
          <li><router-link :to="'/dang-nhap'"> Đăng nhập </router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import $ from 'jquery';
// Sticky Header
$(window).scroll(function () {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > 100) {
    $('.main_h').addClass('sticky');
  } else {
    $('.main_h').removeClass('sticky');
  }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
  if ($('.main_h').hasClass('open-nav')) {
    $('.main_h').removeClass('open-nav');
  } else {
    $('.main_h').addClass('open-nav');
  }
});

$('.main_h li a').click(function () {
  if ($('.main_h').hasClass('open-nav')) {
    $('.navigation').removeClass('open-nav');
    $('.main_h').removeClass('open-nav');
  }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function (event) {
  var id = $(this).attr('href');
  var offset = 70;
  var target = $(id).offset().top - offset;
  $('html, body').animate(
    {
      scrollTop: target,
    },
    500
  );
  event.preventDefault();
});
</script>
<style lang="scss">
@mixin small {
  @media only screen and (max-width: 766px) {
    @content;
  }
}

// colores
$color: #8f8f8f;
$color2: #e8f380;

// Navigation
.main_h {
  position: fixed;
  max-height: 70px;
  z-index: 999;
  width: 100%;
  padding-top: 17px;
  background: none;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  // opacity: 0;
  // top: -100px;
  padding-bottom: 6px;
  font-family: 'Montserrat', sans-serif;
  @include small {
    padding-top: 25px;
  }
}

.open-nav {
  max-height: 400px !important;
  .mobile-toggle {
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
  }
}

.sticky {
  background-color: #fff;
  opacity: 1;
  top: 0px;
  border-bottom: 1px solid lighten($color, 30%);
}

.logo {
  width: 50px;
  font-size: 25px;
  color: $color;
  text-transform: uppercase;
  float: left;
  display: block;
  margin-top: 0;
  line-height: 1;
  margin-bottom: 10px;
  @include small {
    float: none;
  }
}

nav {
  float: right;
  width: 60%;
  @include small {
    width: 100%;
  }

  ul {
    list-style: none;
    overflow: hidden;
    text-align: right;
    float: right;
    @include small {
      padding-top: 10px;
      margin-bottom: 22px;
      float: left;
      text-align: center;
      width: 100%;
    }

    li {
      display: inline-block;
      margin-left: 35px;
      line-height: 1.5;
      @include small {
        width: 100%;
        padding: 7px 0;
        margin: 0;
      }
    }
    a {
      color: #888888;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
}

.mobile-toggle {
  display: none;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  right: 22px;
  top: 0;
  width: 30px;
  -webkit-transition: all 200ms ease-in;
  -moz-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  @include small {
    display: block;
  }

  span {
    width: 30px;
    height: 4px;
    margin-bottom: 6px;
    border-radius: 1000px;
    background: $color;
    display: block;
  }
}

.row {
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  position: relative;
  padding: 0 2%;
}

@-webkit-keyframes scroll {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }
}
</style>
