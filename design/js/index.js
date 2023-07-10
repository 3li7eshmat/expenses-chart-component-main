let charts = document.querySelectorAll('#chart');
let chartSpans = document.querySelectorAll('#chart span');


fetch('../../data.json').then(res => {
    return res.json();
}).then(data => {

    for (let i = 0; i < data.length; i++) {

        charts[i].className = data[i].day
        charts.forEach(chart => {
            if (data[i].day === chart.className) {
                chart.dataset.data = data[i].amount
            }

            chartHeght = `${chart.dataset.data * 3}px`

            chart.style = `height: ${chartHeght}`
        })
    }
}).then(data => {
    for (let i = 0; i < charts.length; i++) {

        chartSpans[i].textContent = `$${charts[i].dataset.data}`;
    }

    charts.forEach(chart => {

        let day = new Date().getDay()
        let arr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    
        let dayWeek = arr[day];
    
        if (chart.className === dayWeek) {
            chart.classList.add('current');
        }
    
    });
});
