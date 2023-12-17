let activeIndex = 0
let limit = 0
let disabled = false
let $stage
let $controls
let canvas = false

const SPIN_FORWARD_CLASS = 'js-spin-fwd'
const SPIN_BACKWARD_CLASS = 'js-spin-bwd'
const DISABLE_TRANSITIONS_CLASS = 'js-transitions-disabled'
const SPIN_DUR = 1000

const appendControls = () => {
  for (let i = 0; i < limit; i++) {
    $('.carousel__control').append(`<a href="#" data-index="${i}"></a>`)
  }
  let height = $('.carousel__control').children().last().outerHeight()
  
  $('.carousel__control').css('height', (30 + (limit * height)))
  $controls = $('.carousel__control').children()
  $controls.eq(activeIndex).addClass('active')
}

const setIndexes = () => {
    $('.spinner').children().each((i, el) => {
        $(el).attr('data-index', i)
        limit++
    })
}

const duplicateSpinner = () => {
    const $el = $('.spinner').parent()
    const html = $('.spinner').parent().html()
    $el.append(html)
    $('.spinner').last().addClass('spinner--right')
    $('.spinner--right').removeClass('spinner--left')
}

const paintFaces = () => {
    $('.spinner__face').each((i, el) => {
        const $el = $(el)
        let color = $(el).attr('data-bg')
        $el.children().css('backgroundImage', `url(${getBase64PixelByColor(color)})`)
    })
}

const getBase64PixelByColor = (hex) => {
    if (!canvas) {
        canvas = document.createElement('canvas')
        canvas.height = 1
        canvas.width = 1
    }
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = hex
        ctx.fillRect (0, 0, 1, 1)
        return canvas.toDataURL()
    }
    return false
}

const prepareDom = () => {
    setIndexes()
    paintFaces()
    duplicateSpinner()
    appendControls()
}

const spin = (inc = 1) => {
    if (disabled) return
    if (!inc) return
    activeIndex += inc
    disabled = true

    if (activeIndex >= limit) {
        activeIndex = 0
    }
  
    if (activeIndex < 0) {
        activeIndex = (limit - 1)
    }

    const $activeEls = $('.spinner__face.js-active')
    const $nextEls = $(`.spinner__face[data-index=${activeIndex}]`)
    $nextEls.addClass('js-next')
  
    if (inc > 0) {
      $stage.addClass(SPIN_FORWARD_CLASS)
    } else {
      $stage.addClass(SPIN_BACKWARD_CLASS)
    }
    
    $controls.removeClass('active')
    $controls.eq(activeIndex).addClass('active')
  
    setTimeout(() => {
        spinCallback(inc)
    }, SPIN_DUR, inc)
}

const spinCallback = (inc) => {
    
    $('.js-active').removeClass('js-active')
    $('.js-next').removeClass('js-next').addClass('js-active')
    $stage
        .addClass(DISABLE_TRANSITIONS_CLASS)
        .removeClass(SPIN_FORWARD_CLASS)
        .removeClass(SPIN_BACKWARD_CLASS)
  
    $('.js-active').each((i, el) => {
        const $el = $(el)
        $el.prependTo($el.parent())
    })
    setTimeout(() => {
        $stage.removeClass(DISABLE_TRANSITIONS_CLASS)
        disabled = false
    }, 100)

}

const attachListeners = () => {
  
    document.onkeyup = (e) => {
        switch (e.keyCode) {
            case 38:
                spin(-1)
                break
            case 40:
                spin(1)
                break
            }
    }
 
    $controls.on('click', (e) => {
      e.preventDefault()
      if (disabled) return
      const $el = $(e.target)
      const toIndex = parseInt($el.attr('data-index'), 10)
      spin(toIndex - activeIndex)
      
    })
}

const assignEls = () => {
    $stage = $('.carousel__stage')
}

const init = () => {
    assignEls()
    prepareDom()
    attachListeners()
}


$(() => {
    init();
});
/*import React, {useState} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({title, content}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

const App = () => (
  <div className='app'>
    <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      ))}
    </Carousel>
  </div>
);

ReactDOM.render(
  <App/>,
  document.body
);
*/