import Actions from './actions.js'

const EVENTS = [
    {
        name: 'Taylor Swift',
        date: '2025-09-27 18:00:00.000',
        price: 120,
    },
    {
        name: 'David Guetta',
        date: '2025-02-13 21:00:00.000',
        price: 90,
    },
    {
        name: 'Angele',
        date: '2025-06-01 20:00:00.000',
        price: 55,
    },
    {
        name: 'Orelsan',
        date: '2025-06-18 14:00:00.000',
        price: 78,
    },
    {
        name: 'Angele',
        date: '2025-06-01 20:00:00.000',
        price: 55,
    },
]

const TICKETS = [
    'David Guetta', 'Angele', 'Orelsan', 'Angele', 'Taylor Swift', 'Angele', 
    'David Guetta', 'Orelsan','Angele', 'Taylor Swift', 'Angele', 'David Guetta',
    'Orelsan', 'Angele', 'Taylor Swift', 'Angele', 'David Guetta', 'David Guetta',
    'Orelsan', 'David Guetta', 'David Guetta', 'Orelsan', 'Orelsan', 'Orelsan'
]

const actions = new Actions()

console.log('##########################################')
console.log('#          MY SUPER TICKET               #')
console.log('##########################################')
console.log('')
console.log('')
console.log('-----------------------')
console.log('1. SETUP: CREATE EVENTS')
console.log('-----------------------')
EVENTS.forEach((event) => {
    actions.create_event(event)
})
console.log('')
console.log('-----------------------')
console.log('2. SETUP: CREATE TICKETS')
console.log('-----------------------')
TICKETS.forEach((ticket) => {
    actions.create_ticket(ticket)
})
console.log('')
console.log('-----------------------')
console.log('3. LIST EVENTS')
console.log('-----------------------')
// list_events génère une string avec la liste des événements
console.log(actions.list_events())
console.log('')
console.log('-----------------------')
console.log('4. LIST TICKETS')
console.log('-----------------------')
// list_tickets génère une string avec la liste des tickets
console.log(actions.list_tickets())
console.log('')
console.log('-----------------------')
console.log('5. LIST TOTALS')
console.log('-----------------------')
// list_amount_per_event génère un object avec le total des ventes par événement
// Exemple : { 'Taylor Swift': 1029, 'David Guetta': 267, 'Angele': 90, 'Orelsan': 123 }
const event_to_amount = actions.list_amount_per_event()
console.log(
    Object.entries(event_to_amount).map(entry => `${entry[0]}: ${entry[1]}`).join(', ')
)
console.log('')

