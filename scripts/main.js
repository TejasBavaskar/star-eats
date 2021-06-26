window.onload = () => {
  const listingsList = document.querySelectorAll('.listings');
  listingsList.forEach(list => {
    handleSlider(list);
  });

  toggleHeaderOptions();
  toggleSearchBox();
}

const handleSlider = list => {
  const leftArrow = list.querySelector('.left');
  const rightArrow = list.querySelector('.right');
  const listingsGrid = list.querySelector('.listings-grid');

  if(!listingsGrid || !leftArrow ||!rightArrow) {
    console.log('Error in slider handler');
    console.log('Left Arrow: ', leftArrow);
    console.log('Right Arrow: ', rightArrow);
    console.log('listingsGrid: ', listingsGrid);
    return;
  }

  rightArrow.addEventListener('click', () => {
    toggleSliderArrowClass('right');

    listingsGrid.scrollTo({
      left: listingsGrid.offsetWidth,
      behaviour: 'smooth'
    });
  })

  leftArrow.addEventListener('click', () => {
    toggleSliderArrowClass('left');

    listingsGrid.scrollTo({
      left: 0,
      behaviour: 'smooth'
    });
  })

  const toggleSliderArrowClass = (direction) => {
    if(direction === 'right') {
      rightArrow.classList.remove('dark');
      leftArrow.classList.add('dark');
    } else if(direction === 'left') {
      leftArrow.classList.remove('dark');
      rightArrow.classList.add('dark');
    }
  }
}

const toggleHeaderOptions = () => {
  const deliveryBtn = document.getElementById('delivery-btn');
  const pickupBtn = document.getElementById('pickup-btn');

  deliveryBtn.addEventListener('click', () => {
    deliveryBtn.classList.add('selected');
    pickupBtn.classList.remove('selected');
  })

  pickupBtn.addEventListener('click', () => {
    pickupBtn.classList.add('selected');
    deliveryBtn.classList.remove('selected');
  })
}

const toggleSearchBox = () => {
  const searchElements = document.querySelector('.search-elements');
  const searchBox = document.querySelector('.search-box');

  console.log('searchElements: ', searchElements);
  console.log('searchBox: ', searchBox);

  searchElements.addEventListener('mouseover', (event) => {
    searchElements.style.display = "none";
    searchBox.style.display = "flex";
  })

  searchBox.addEventListener('mouseout', () => {
    searchBox.style.display = "none";
    searchElements.style.display = "flex";
  })
}

