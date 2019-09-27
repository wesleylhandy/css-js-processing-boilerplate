const fruits = ['apples', 'oranges', 'bananas'];

const veggies = ['carrots', 'celery', 'lettuce'];

const groceryList = [...fruits, ...veggies];

const ToDos = {
    "GetGroceries": {
        groceryList,
        time: "10:00AM"
    },
    "GetHaircut": {
        time: "12:00pm"
    }
}

const { GetGroceries, GetHaircut, GetDinner = {restaraunt: "Winstons", time: "5:00pm", hasReservations: true}} = ToDos;

console.log({GetGroceries, GetGroceries, GetDinner});
console.log(window.location.href)
console.log("Syncing...");