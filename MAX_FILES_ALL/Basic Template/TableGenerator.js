function TableGenerator(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.tableElement;

    this.getHTML = function() {
        var html = "<table border=1>";
        for (var i = 0; i < rows; i++) {
            html += "<tr>";
            for (var j = 0; j < cols; j++) {
                var metadata = i + "-" + j;
                html += "<td data-cell=" + metadata +">";
                //html += "This is " + i + "." + j;
                html += "</td>";
            }
            html += "</tr>";
        }
        html += "</table>";
        return html;
    }

    this.createCoolColorEffect = function() {
        // Bind event handlers
        var cells = tableElement.querySelectorAll("td");
        for (var i=0; i<cells.length; i++) {
            var currentCell = cells[i];
            currentCell.addEventListener("mouseover", function() {
                var colors = ["black", "red", "blue", "yellow", "orange"];
                //this.style.background = colors[getRandom(0, 4)];
                var r = getRandom(0, 255);
                var g = getRandom(0, 255);
                var b = getRandom(0, 255);
                this.style.background = "rgba(" + r + "," + g + "," + b + ",1)";
                var divInformation = document.querySelector("#information");
                divInformation.innerHTML = this.getAttribute("data-cell");
            });
            currentCell.addEventListener("mouseout", function() {
                this.style.background ="white";
            });
        }
    }
}

