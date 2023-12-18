import '../styles/modernize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/services.css';
import '../styles/components/project.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/animations.css';
import '../styles/utility.css';
import '../src/utils/attractHover.js';
import '../src/utils/scrollAnimation.js';
import '../src/utils/imageHover.js';
import '../src/utils/typeWrite.js';
import '../src/utils/backToTop.js';
// import '../src/utils/changeBackground.js';
import lazyLoading from '/src/utils/lazyLoading';

lazyLoading();

let loader = document.querySelector('.pre-loader');

function delayLoad() {
  setTimeout( () => {
    loader.style.display = 'none';
    document.querySelector('.main').style.display = 'block';
  }, 5500)
}

delayLoad();

