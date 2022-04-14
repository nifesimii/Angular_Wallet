// Dom7
var $ = Dom7;

// Theme
var theme = 'ios';

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  el: '#app',
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});


$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized for all pages

  /* coverimg */
  $('.coverimg').each(function () {
    var imgpath = $(this).find('img');
    $(this).css('background-image', 'url(' + imgpath.attr('src') + ')');
    imgpath.hide();
  });

  $('.accordion-toggle').on('click', function () {
    $(this).toggleClass('active')
    $(this).closest('.accordion-list').find('.accordion-content').toggleClass('show')
  })


});

$(document).on('page:afterin', function (e) {
  /* scroll from top and add class */
  $('.view-main .page-current .page-content').on('scroll', function () {
    if ($(this).scrollTop() > '10') {
      $('.view-main .navbar-current').addClass('active');
    } else {
      $('.view-main .navbar-current').removeClass('active');
    }
  });

  /* static footer*/
  if ($('.page.page-current .footer').length > 0) {
    $('.view.view-main .page-content').addClass('has-footer');
  } else {
    $('.view.view-main .page-content').removeClass('has-footer');
  }
  $('.centerbutton .nav-link').on('click', function () {
    $(this).toggleClass('active')
  })


});

$(document).on('page:init', '.page[data-name="splash"]', function (e) {
  setTimeout(function () {
    $('.loader-wrap').hide();
  }, 1000);

  setTimeout(function () {
    app.views.main.router.navigate('/landing/');
  }, 4000);
})

$(document).on('page:init', '.page[data-name="thankyouorder"]', function (e) {
  setTimeout(function () {
    app.views.main.router.navigate('/home/');
  }, 3000);
})

$(document).on('page:init', '.page[data-name="landing"]', function (e) {
  var introswiper = new Swiper(".introswiper", {
    direction: 'vertical',
    mousewheelControl: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

});

$(document).on('page:init', '.page[data-name="verify"]', function (e) {
  document.getElementById('timer').innerHTML = '03' + ':' + '00';
  startTimer();

  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if (m < 0) {
      return
    }

    document.getElementById('timer').innerHTML =
      m + ":" + s;
    setTimeout(startTimer, 1000);
  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
  }

});

/* pwa app install */
var deferredPrompt;
window.addEventListener('beforeinstallprompt', function (e) {
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();
  deferredPrompt = e;
  return false;
});
$(document).on('page:init', '.page[data-name="home"]', function (e) {

  /* footer event modal close*/
  var swipeToClosePopup = app.popup.create({
    el: '.popup-swipe-to-close',
    swipeToClose: true,
  });
  swipeToClosePopup.on('close', function (popup) {
    $('.centerbutton .nav-link').removeClass('active')
  });

  /* pwa app install */
  $('#addtohome').on('click', function () {
    if (deferredPrompt !== undefined) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choiceResult) {

        if (choiceResult.outcome == 'dismissed') {
          console.log('User cancelled home screen install');
        }
        else {
          console.log('User added to home screen');
        }
        deferredPrompt = null;
      });
    }
  });

  /* dark mode switch*/
  $('#darkmodeswitch').on('click', function () {
    if ($(this).is(':checked')) {
      $('html').addClass('theme-dark');
    } else {
      $('html').removeClass('theme-dark');
    }
  });

  /* Progress circle */
  var progresssaving = new ProgressBar.Circle(circlesaving, {
    color: '#000000',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 6,
    easing: 'easeInOut',
    trailColor: '#FFD6DF',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#FF345E', width: 6 },
    to: { color: '#FF345E', width: 6 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "<small class='size-12'>%<small>");
      }

    }
  });
  progresssaving.text.style.fontSize = '24px';
  progresssaving.animate(0.65);  // Number from 0.0 to 1.0

  /* Progress circle */
  var progresssaving2 = new ProgressBar.Circle(circlesaving2, {
    color: '#000000',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 6,
    easing: 'easeInOut',
    trailColor: '#ffedc0',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#ffbd17', width: 6 },
    to: { color: '#ffbd17', width: 6 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "<small class='size-12'>%<small>");
      }

    }
  });
  progresssaving2.text.style.fontSize = '24px';
  progresssaving2.animate(0.82);  // Number from 0.0 to 1.0

  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

})

$(document).on('page:init', '.page[data-name="stats"]', function (e) {

  /* footer event modal close*/
  var swipeToClosePopup = app.popup.create({
    el: '.popup-swipe-to-close',
    swipeToClose: true,
  });
  swipeToClosePopup.on('close', function (popup) {
    $('.centerbutton .nav-link').removeClass('active')
  });

  /* date picker  */
  calendarRange = app.calendar.create({
    inputEl: '#daterange',
    rangePicker: true
  });

  $('.daterange-btn').on('click', function () {
    $('#daterange').click();
  });

  /* chart js areachart */
  window.randomScalingFactor = function () {
    return Math.round(Math.random() * 60);
  }

  window.randomScalingFactor2 = function () {
    return Math.round(Math.random() * 60 - 30);
  }
  var barchart = document.getElementById('areachart').getContext('2d');
  var mybarcartCofig = {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
        ],
        backgroundColor: '#FF345E',
        borderWidth: 0,
        borderRadius: 10,
        borderSkipped: false,
        barThickness: 10,
      },
      {
        label: '# of Votes',
        data: [
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
          randomScalingFactor2(),
        ],
        backgroundColor: '#00DFA3',
        borderWidth: 0,
        borderRadius: 10,
        borderSkipped: false,
        barThickness: 10,
      }]
    },
    options: {

      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          ticks: {
            display: false
          },
          drawBorder: false,
          label: false,
          grid: {
            display: true,
            zeroLineColor: 'rgba(219,219,219,0.3)',
            drawBorder: false,
            lineWidth: 1,
            zeroLineWidth: 2
          }
        },
        x: {
          grid: {
            display: false,
          },
        }
      }
    }
  }
  var myBarChart = new Chart(barchart, mybarcartCofig);
  /* my area chart randomize */
  setInterval(function () {
    mybarcartCofig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor2();
      });
    });
    myBarChart.update();
  }, 2000);
  var progressCircles2 = new ProgressBar.Circle(circleprogresstwo, {
    color: '#3AC79B',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: '#d8f4eb',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#00DFA3', width: 10 },
    to: { color: '#00DFA3', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        //  circle.setText('');
      } else {
        // circle.setText(value + "<small>%<small>");
      }

    }
  });
  // progressCircles2.text.style.fontSize = '20px';
  progressCircles2.animate(0.85);  // Number from 0.0 to 1.0

  /* Progress circle */
  var progressCircles3 = new ProgressBar.Circle(circleprogressthree, {
    color: '#F73563',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: '#fdd7e0',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#F73563', width: 10 },
    to: { color: '#F73563', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        // circle.setText('');
      } else {
        //  circle.setText(value + "<small>%<small>");
      }

    }
  });
  progressCircles3.animate(0.65);  // Number from 0.0 to 1.0


  /* Progress circle */
  var progressCircles1 = new ProgressBar.Circle(circleprogressone, {
    color: '#000000',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 8,
    trailWidth: 8,
    easing: 'easeInOut',
    trailColor: '#CCF9ED',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#00DFA3', width: 8 },
    to: { color: '#00DFA3', width: 8 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText('<span class="size-12">' + value + '<small>%<small></span>');
      }

    }
  });
  progressCircles1.animate(0.65);  // Number from 0.0 to 1.0


  /* Progress circle */
  var progressCircles4 = new ProgressBar.Circle(circleprogressfour, {
    color: '#000000',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 8,
    trailWidth: 8,
    easing: 'easeInOut',
    trailColor: '#FFF1CC',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#FFBB00', width: 8 },
    to: { color: '#FFBB00', width: 8 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText('<span class="size-12">' + value + '<small>%<small></span>');
      }

    }
  });
  progressCircles4.animate(0.65);  // Number from 0.0 to 1.0

  /* chart js areachart */
  var areachart2 = document.getElementById('smallchart2').getContext('2d');
  var gradient2 = areachart2.createLinearGradient(0, 0, 0, 66);
  gradient2.addColorStop(0, 'rgba(58, 199, 155, 0.6)');
  gradient2.addColorStop(1, 'rgba(58, 199, 155, 0)');
  var myareachartCofig2 = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        radius: 0,
        backgroundColor: gradient2,
        borderColor: '#00DFA3',
        borderWidth: 1,
        fill: true,
        tension: 0.5,
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
        x: {
          display: false,
        }
      }
    }
  }
  var myAreaChart2 = new Chart(areachart2, myareachartCofig2);
  /* my area chart randomize */
  setInterval(function () {
    myareachartCofig2.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart2.update();
  }, 2000);


  /* chart js areachart */
  var areachart3 = document.getElementById('smallchart3').getContext('2d');
  var gradient3 = areachart3.createLinearGradient(0, 0, 0, 66);
  gradient3.addColorStop(0, 'rgba(247, 53, 99, 0.6)');
  gradient3.addColorStop(1, 'rgba(247, 53, 99, 0)');
  var myareachartCofig3 = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        radius: 0,
        backgroundColor: gradient3,
        borderColor: '#f73563',
        borderWidth: 1,
        fill: true,
        tension: 0.5,
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
        x: {
          display: false,
        }
      }
    }
  }
  var myAreaChart3 = new Chart(areachart3, myareachartCofig3);
  /* my area chart randomize */
  setInterval(function () {
    myareachartCofig3.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart3.update();
  }, 2000);


  /* swiper carousel cardwiper */
  var swiper1 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });
  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

})

$(document).on('page:init', '.page[data-name="rewards"]', function (e) {
  var swiper1 = new Swiper(".summayswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* swiper carousel cardwiper */
  var swiper3 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  $('.cardswiper .swiper-slide .card').on('click', function () {
    $('.cardswiper .swiper-slide .card').removeClass('selected');
    $(this).addClass('selected').find('.form-check-input').prop('checked', true);
  });
});

$(document).on('page:init', '.page[data-name="shop"]', function (e) {
  /* footer event modal close*/
  var swipeToClosePopup = app.popup.create({
    el: '.popup-swipe-to-close',
    swipeToClose: true,
  });
  swipeToClosePopup.on('close', function (popup) {
    $('.centerbutton .nav-link').removeClass('active')
  });

  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* filter sliders range picker for filter */
  var html5Slider = document.getElementById('rangeslider');
  noUiSlider.create(html5Slider, {
    start: [100, 200],
    connect: true,
    range: {
      'min': 0,
      'max': 500
    }
  });

  var inputNumber = document.getElementById('input-number');
  var select = document.getElementById('input-select');

  html5Slider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];

    if (handle) {
      inputNumber.value = value;
    } else {
      select.value = Math.round(value);
    }
  });
  select.addEventListener('change', function () {
    html5Slider.noUiSlider.set([this.value, null]);
  });
  inputNumber.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
  });

});

$(document).on('page:init', '.page[data-name="product"]', function (e) {
  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });
});

$(document).on('page:init', '.page[data-name="wallet"]', function (e) {
  /* swiper carousel cardwiper */
  var swiper3 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* chart js areachart */
  window.randomScalingFactor = function () {
    return Math.round(Math.random() * 60);
  }
  var areachart21 = document.getElementsByClassName('areachartsmall')[0].getContext('2d');
  var areachart31 = document.getElementsByClassName('areachartsmall')[1].getContext('2d');
  var areachart41 = document.getElementsByClassName('areachartsmall')[2].getContext('2d');
  var gradient21 = areachart21.createLinearGradient(0, 0, 0, 44);
  gradient21.addColorStop(0, 'rgba(0, 223, 163, 0.6)');
  gradient21.addColorStop(1, 'rgba(0, 223, 163, 0)');
  var myareachartCofig21 = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        radius: 0,
        backgroundColor: gradient21,
        borderColor: '#00DFA3',
        borderWidth: 1,
        fill: true,
        tension: 0.5,
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
        x: {
          display: false,
        }
      }
    }
  }
  var myAreaChart21 = new Chart(areachart21, myareachartCofig21);
  var myAreaChart31 = new Chart(areachart31, myareachartCofig21);
  var myAreaChart41 = new Chart(areachart41, myareachartCofig21);
  /* my area chart randomize */
  setInterval(function () {
    myareachartCofig21.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart21.update();
  }, 1000);

  setInterval(function () {
    myareachartCofig21.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart31.update();
  }, 1500);

  setInterval(function () {
    myareachartCofig21.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart41.update();
  }, 2000);

});

$(document).on('page:init', '.page[data-name="bills"]', function (e) {
  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });
});

$(document).on('page:init', '.page[data-name="sendmoney"]', function (e) {
  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

});
$(document).on('page:init', '.page[data-name="sendmoney1"]', function (e) {
  /* swiper carousel cardwiper */
  var swiper1 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });
  $('.cardswiper .swiper-slide .card').on('click', function () {
    $('.cardswiper .swiper-slide .card').removeClass('selected');
    $(this).addClass('selected').find('.form-check-input').prop('checked', true);
  });
});

$(document).on('page:init', '.page[data-name="sendmoney2"]', function (e) {
  /* swiper carousel cardwiper */
  var swiper1 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });
  $('.cardswiper .swiper-slide .card').on('click', function () {
    $('.cardswiper .swiper-slide .card').removeClass('selected');
    $(this).addClass('selected').find('.form-check-input').prop('checked', true);
  });
});

$(document).on('page:init', '.page[data-name="sendmoney3"]', function (e) {
  /* swiper carousel cardwiper */
  var swiper1 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });
  $('.cardswiper .swiper-slide .card').on('click', function () {
    $('.cardswiper .swiper-slide .card').removeClass('selected');
    $(this).addClass('selected').find('.form-check-input').prop('checked', true);
  });
});

$(document).on('page:init', '.page[data-name="profile"]', function (e) {
  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });
})

$(document).on('page:afterin', '.page[data-name="blogs"]', function (e) {
  /* swiper carousel projects */
  var swiper12 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

})
