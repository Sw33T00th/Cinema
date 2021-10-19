window.onload = function() {

  // DOM-objects
  const schemeSvg = document.querySelector('.scheme-svg');
  const priceLabel = document.querySelector('.total-price-count');
  const checkoutBtn = document.querySelector('.checkout-button');

  // Price variables
  let ticketPrice = 600;
  let totalPrice = 0;

  // Picking seat
  schemeSvg.addEventListener('click', (event) => {

    if(!event.target.classList.contains('booked') && event.target.classList.contains('seat')){
      event.target.classList.toggle('active');
      const activeCount = schemeSvg.querySelectorAll('.active').length;
      totalPrice = ticketPrice * activeCount;
      priceLabel.textContent = totalPrice;
    }
     
  });

  // Buy picked seats
  checkoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const seats = schemeSvg.querySelectorAll('.active');
    seats.forEach(seat => {
      seat.classList.remove('active');
      seat.classList.add('booked');
      priceLabel.textContent = 0;
    })
     
   
  })

}