// Initialization...
const fcPlus = document.getElementById('fc-plus');
const fcMinus = document.getElementById('fc-minus');
const ePlus = document.getElementById('e-plus');
const eMinus = document.getElementById('e-minus');

const firstClassTicket = document.getElementById("first-class");
const economyTicket = document.getElementById("economy");

let fcTicket = 0;
let eTicket = 0;

// Event Listener
fcPlus.addEventListener('click', function(){
    fcTicket = addTicket(parseInt(firstClassTicket.value));
    showTicket(fcTicket, firstClassTicket);
});

ePlus.addEventListener("click", function(){
    eTicket = addTicket(parseInt(economyTicket.value));
    showTicket(eTicket, economyTicket);
});

fcMinus.addEventListener("click", function(){
    fcTicket = subTicket(parseInt(firstClassTicket.value));
    showTicket(fcTicket, firstClassTicket);
});

eMinus.addEventListener("click", function(){
    eTicket = subTicket(parseInt(economyTicket.value));
    showTicket(eTicket, economyTicket);
});

// Function...
function addTicket(ticketNumber){
    return ++ticketNumber;
}

function subTicket(ticketNumber){
    return ticketNumber <= 0 ? 0 : --ticketNumber;
}

function showTicket(ticket, ticketType){
    ticketType.value = ticket;
    showTotalCost();
}

const showTotalCost = () =>{
    const subTotal = parseFloat((fcTicket*150)+(eTicket*100));
    const vat = parseFloat(subTotal/10);
    const total = subTotal + vat;
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = total;
}

document.getElementById('form').addEventListener('submit', showBookingDetails);
function showBookingDetails(evt){
    document.getElementById('booking-section').style.display = "none";
    const bookingDetails = document.getElementById('booking-form');
    bookingDetails.style.display = 'block';
    bookingDetails.style.margin = '0 230px 0 0'
    const from = document.getElementById('from');
    from.innerText = evt.target.initial.value;
    const to = document.getElementById('to');
    to.innerText = evt.target.destination.value;
    const starting = document.getElementById('start-time');
    starting.innerText = evt.target.departure.value;
    const ending = document.getElementById('return-time');
    ending.innerText = evt.target.return.value;
    const firstClassTicket = document.getElementById('first-class-ticket');
    firstClassTicket.innerText = evt.target.firstClass.value;
    const economy = document.getElementById('economy-class-ticket');
    economy.innerText = evt.target.economy.value;
    const subTotal = document.getElementById('next-subtotal');
    subTotal.innerText = document.getElementById('subTotal').innerText;
    const vat = document.getElementById('next-vat');
    vat.innerText = document.getElementById('vat').innerText;
    const total = document.getElementById('next-total');
    total.innerText = document.getElementById('total').innerText;
    evt.preventDefault();
}