// 페이지 변경용 DB 파트

const portfolioDB = [
  {
    mainImg: './img/main/ad/1.jpg',
    thumbs: ['./img/thumb/ad/1.jpg', './img/thumb/ad/2.jpg'],
    descriptionH2: '리액트소개페이지',
    descriptionP: '수능날에 맞춰 광고를 만들어 전단지를 나눠주는 대신 팝업으로 전단지를 대신하여 어쩌고 하였습니다.',
    links: [
      {
        linkInto: '#none',
        linkName: '깃 주소',
        linkClass: 'fa-brands fa-github'
      },
      {
        linkInto: '#none',
        linkName: '피그마 주소',
        linkClass: 'fa-brands fa-figma'
      },
      {
        linkInto: '#none',
        linkName: '구글 ppt',
        linkClass: 'xi-office'
      },
      {
        linkInto: '#none',
        linkName: '노션',
        linkClass: 'xi-note-o'
      }
    ]
  },
  {
    mainImg: './img/main/ad/1.jpg',
    thumbs: ['./img/thumb/ad/2.jpg', './img/thumb/ad/3.jpg', './img/thumb/ad/1.jpg', './img/thumb/ad/1.jpg'],
    descriptionH2: '수능광고전단지2',
    descriptionP: '수능날에 맞춰 광고를 만들어 전단지를 나눠주는 대신 팝업으로 전단지를 대신하여 저쩌고 하였습니다.',
    links: [
      {
        linkInto: '#none',
        linkName: '깃 주소',
        linkClass: 'fa-brands fa-github'
      },
      {
        linkInto: '#none',
        linkName: '피그마 주소',
        linkClass: 'fa-brands fa-figma'
      },
      {
        linkInto: '#none',
        linkName: '사이트 주소',
        linkClass: 'fa-solid fa-globe'
      }
    ]
  },
  {
    mainImg: './img/main/ad/1.jpg',
    thumbs: ['./img/thumb/ad/3.jpg', './img/thumb/ad/1.jpg', './img/thumb/ad/2.jpg'],
    descriptionH2: 'EC솔루션 프론트엔드 개발',
    descriptionP: '수능날에 맞춰 광고를 만들어 전단지를 나눠주는 대신 팝업으로 전단지를 대신하여 우쩌고 하였습니다.',
    links: [
      {
        linkInto: '#none',
        linkName: '피그마 주소',
        linkClass: 'fa-brands fa-figma'
      },
      {
        linkInto: '#none',
        linkName: '사이트 주소',
        linkClass: 'fa-solid fa-globe'
      }
    ]
  }
];


$(function () {

  // html 태그 쪽에서 관리할 수 있도록 처리하기 위해 .active가 있는 li의 index값 가져오기 위함
  // (유지보수 위함)

  let startNum = $('#portfolio .myNav .active').index();
  changePage(startNum);

  // click 시 active 클래스 들어감

$('#portfolio .myNav li').click(function(){
  // 둘 중 하나 선택하여 사용

  // $('#portfolio .myNav li').removeClass('active');
  // $(this).addClass('active');

  $(this).addClass('active').siblings().removeClass('active');

  changePage($(this).index());
});

// 페이지 변경용 콜백함수

function changePage (num){

  $('#portfolio .description h2').html(portfolioDB[num].descriptionH2);

  $('#portfolio .description p').html(portfolioDB[num].descriptionP);
  $('#portfolio .mainImg img').attr('src', portfolioDB[num].mainImg);

  let thumbImgs = '';
  $.each(portfolioDB[num].thumbs, (index, value)=>{
    thumbImgs += `<li><img src=${value} alt="" class="img-fluid"></li>`;
  });
  $('#portfolio .thumbs').html(thumbImgs);

  let linkSpace = '';
  $.each(portfolioDB[num].links, (index, value)=>{
    linkSpace += `<li><a href="${value.linkInto}"><i class="${value.linkClass} text-success fs-1"><span class="sr-only">${value.linkName}</span></i></a></li>`;
  });
  $('#portfolio .links').html(linkSpace);

}


});


