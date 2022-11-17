$(function () {
  $.ajax({
    type: "GET",
    url: "/ajax/db/jay.json",
    dataType: "json",
    success: function (data) {

      let startNum = $('#portfolio .myNav .active').index();
      changePage(startNum);

      // click 시 active 클래스 들어감

      $('#portfolio .myNav li').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        changePage($(this).index());
      });

      // 페이지 변경용 콜백함수

      function changePage(num) {

        $('#portfolio .description h2').html(data[num].descriptionH2);

        $('#portfolio .description p').html(data[num].descriptionP);
        $('#portfolio .mainImg img').attr('src', data[num].mainImg);

        let thumbImgs = '';
        $.each(data[num].thumbs, (index, value) => {
          thumbImgs += `<li><img src=${value} alt="" class="img-fluid"></li>`;
        });
        $('#portfolio .thumbs').html(thumbImgs);

        let linkSpace = '';
        $.each(data[num].links, (index, value) => {
          linkSpace += `<li><a href="${value.linkInto}"><i class="${value.linkClass} text-success fs-1"><span class="sr-only">${value.linkName}</span></i></a></li>`;
        });
        $('#portfolio .links').html(linkSpace);

      }
    },
    error: function (request, status, error) {
      alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
    }
  });
});