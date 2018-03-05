// this file contains styles which will change on our components
// it was created to eliminate some of the clutter in our Root component state

var styles = {
  overlayStyle(isVisible) {
    return {
      transition: isVisible ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s',
      MozTransform: isVisible ? '' : 'translate3d(100%, 0, 0)',
      MsTransform: isVisible ? '' : 'translate3d(100%, 0, 0)',
      OTransform: isVisible ? '' : 'translate3d(100%, 0, 0)',
      WebkitTransform: isVisible ? '' : 'translate3d(100%, 0, 0)',
      transform: isVisible ? ''  : 'translate3d(100%, 0, 0)',
      opacity:  isVisible ? 1 : 0,
    }
  },

  navStyle(isOpen) {
    return {
      MozTransform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
      MsTransform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
      OTransform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
      WebkitTransform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
      transform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
    }
  }
}

export default styles;
