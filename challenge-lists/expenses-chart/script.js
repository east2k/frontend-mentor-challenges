const ctx = document.getElementById('bar-graph').getContext('2d');

const dataArray = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];

function getBgColors() {
    const array = dataArray;
    const maxValue = Math.max.apply(this, array);

    const bg = array.map(a => a === maxValue ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)");
    return bg;
}


const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mon',
            'tue',
            'wed',
            'thu',
            'fri',
            'sat',
            'sun'
        ],
        datasets: [{
            label: '',
            data: dataArray,
            backgroundColor: getBgColors(),
            borderWidth: 0,
            borderRadius: 5,
            maxBarThickness: 50,
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 16,
                    },
                    color: "hsl(28, 10%, 53%)"
                }
            },
            y: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});