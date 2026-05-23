const leadsTableBody = document.getElementById('leadstablebody');
const searchInput = document.getElementById('search-input');

let currentLeads = [];

const leads = [
    {
        id: 1,
        name: "Иван",
        course: "JavaScript",
        budget: 30000,
        status: "new"
    },
    {
        id: 2,
        name: "Анна",
        course: "Python",
        budget: 45000,
        status: "inWork"
    },
    {
        id: 3,
        name: "Максим",
        course: "AI",
        budget: 70000,
        status: "hot"
    },
    {
        id: 4,
        name: "Елена",
        course: "JavaScript",
        budget: 25000,
        status: "closed"
    },
    {
        id: 5,
        name: "Олег",
        course: "AI",
        budget: 90000,
        status: "hot"
    }
]

function createTable(leadsArray) {
    leadsTableBody.innerHTML = '';
    currentLeads = [...leadsArray];

    leadsArray.forEach(lead => {
        const row = leadsTableBody.insertRow();
        row.insertCell(0).textContent = lead.id;
        row.insertCell(1).textContent = lead.name;
        row.insertCell(2).textContent = lead.course;
        row.insertCell(3).textContent = lead.budget;
        row.insertCell(4).textContent = lead.status;
    });

    const footer = document.getElementById('leads-count');
    if (footer) {
        footer.textContent = `Всего заявок: ${leadsArray.length}`;
    }
}

function searchLeads() {
    const searchName = searchInput.value.toLowerCase().trim();

    if (searchName === '') {
        createTable(leads);
    } else {
        const filteredLeads = leads.filter(lead =>
            lead.name.toLowerCase() === searchName
        );
        createTable(filteredLeads);
    }
}

searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchLeads();
    }
});

function sortBy(key) {
    const sortedLeads = [...currentLeads].sort((a, b) => {
        if (key === 'budget') {
            return a[key] - b[key];
        } else {
            if (a[key] < b[key])
                return -1;
            if (a[key] > b[key])
                return 1;
            return 0;
        }
    });
    createTable(sortedLeads);
}

document.getElementById('sort-id').addEventListener('click', () => sortBy('id'));
document.getElementById('sort-name').addEventListener('click', () => sortBy('name'));
document.getElementById('sort-course').addEventListener('click', () => sortBy('course'));
document.getElementById('sort-budget').addEventListener('click', () => sortBy('budget'));
document.getElementById('sort-status').addEventListener('click', () => sortBy('status'));

createTable(leads);