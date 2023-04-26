//자주 발생하는 이벤트를 처리하는 함수를 최소화
//debounce(함수, 대기시간)
//일정시간 간격으로 이벤트를 처리할 수 있음 
function debounce(func, wait = 20, immediate = true) {
  let timeout //타이머id저장 
  return function() {
    let context = this, args = arguments

    //timeout 변수 초기화, 즉시실행이 아닌경우 함수 호출
    let later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    };
    //즉시 실행, timeout이 없는 경우 함수 호출 
    let callNow = immediate && !timeout
    clearTimeout(timeout) //타이머 초기화 
    timeout = setTimeout(later, wait) //대기시간 이후 later함수를 실행하기 위한 타이머 설정
    if (callNow) func.apply(context, args) //context와 args를 사용해 함수를 호출, 
  }
}

const sliderImages = document.querySelectorAll('.slide-in')

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {

    //현재 스크롤 위치와 현재 뷰포트높이를 더하고 이미지 높이의 절반을 빼 
    //이미지가 화면의 반 이상 보이는 시점을 계산
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2
    
    //이미지 상단위치와 이미지 높이를 더한 값으로 이미지 하단 위치를 계산
    const imageBottom = sliderImage.offsetTop + sliderImage.height
    
    //이미지가 화면의 반 이상 보이는 시점(slideInAt)이 
    //이미지의 상단 위치보다 큰지 확인, 이미지가 화면에 반 이상 보이는지 체크 
    const isHalfshown = slideInAt > sliderImage.offsetTop
    
    //현재 스크롤 위치가 이미지의 하단위치봗 작은지,
    //아직 화면을 벗어나지 않았는지를 체크 
    const isNotScrolledPast = window.scrollY < imageBottom
    
    //체크 결과에 따라 애니메이션을 적용하기 위한 클래스를 추가하거나 제거 
    if(isHalfshown && isNotScrolledPast) {
      sliderImage.classList.add('active')
    } else {
      sliderImage.classList.remove('active')

    }
  })
}

window.addEventListener('scroll', debounce(checkSlide))