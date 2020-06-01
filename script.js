class CarRentalTable{
    constructor(days, price, advance){
        this.days = days;
        this.price = price;
        this.advance = advance;
    }

    finalPrice(){
        finalPrice = (this.days * this.price) + this.advance

        return finalPrice;
    }
    lineHTML(){
        let html = "<tr>";
        for(let key in this){
            html += "<td>";
            html += this[key];
            html += "</td>";
        }
        html += "<td>"
        html += this.finalPrice().toFixed(2);
		html += "</td>";
		html += "</tr>";
		return html;
    }

}

var tabOfCar =[
    new CarRentalTable(1, 1600, 4000),
    new CarRentalTable(2, 1500, 4000),
    new CarRentalTable(5, 1300, 3500),
    new CarRentalTable(7, 1200, 3000),
    new CarRentalTable(14, 1000, 3000),
    new CarRentalTable(25, 1000, 0)
];

for(let line of tabOfCar){
    table.innerHTML += line.lineHTML();
}